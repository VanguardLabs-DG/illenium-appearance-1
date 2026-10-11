/* ==========================================================================
   ILLENIUM APPEARANCE - ADMIN UI SCRIPT
   Distrito Paulista · Vanguard Ecosystem Standard (vanguard_lib)
   Microfrontend Architecture for vanguard_esc & mri_Qadmin
   ========================================================================== */

(function () {
  'use strict';

  // --- STATE ---
  let allStores = [];
  let currentRevision = '';
  let currentFilter = 'all';
  let searchQuery = '';
  let viewMode = 'table'; // 'table' | 'cards'
  let isBusy = false;
  let pendingDelete = null;

  const defaultTypeLabels = {
    clothing: 'Loja de Roupas',
    barber: 'Barbearia',
    tattoo: 'Estúdio de Tatuagem',
    surgeon: 'Cirurgião Plástico'
  };

  const defaultTypeIcons = {
    clothing: 'fa-shirt',
    barber: 'fa-scissors',
    tattoo: 'fa-pen-nib',
    surgeon: 'fa-syringe'
  };

  // --------------------------------------------------------------------------
  // NUI Bridge
  // --------------------------------------------------------------------------
  async function fetchNui(eventName, data = {}) {
    try {
      const resourceName = window.GetParentResourceName ? window.GetParentResourceName() : 'illenium-appearance';
      const response = await fetch(`https://${resourceName}/${eventName}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data),
      });
      return await response.json();
    } catch (err) {
      console.warn(`[illenium-appearance/admin] NUI error for ${eventName}:`, err);
      return { ok: false, code: 'fetch_error', message: 'Falha de comunicação com o jogo.' };
    }
  }

  // --------------------------------------------------------------------------
  // Toast Notifications
  // --------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconHtml = '';
    if (type === 'success') {
      iconHtml = '<i class="fa-solid fa-check" style="color: var(--emerald); font-size: 15px;"></i>';
    } else if (type === 'error') {
      iconHtml = '<i class="fa-solid fa-circle-exclamation" style="color: var(--rose); font-size: 15px;"></i>';
    } else {
      iconHtml = '<i class="fa-solid fa-circle-info" style="color: var(--primary); font-size: 15px;"></i>';
    }

    toast.innerHTML = `
      ${iconHtml}
      <span style="flex: 1; line-height: 1.4;">${escapeHtml(message)}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px) scale(0.95)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 220);
    }, 4500);
  }

  function escapeHtml(str) {
    if (str === undefined || str === null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // --------------------------------------------------------------------------
  // Data Loading & Processing
  // --------------------------------------------------------------------------
  async function loadStores() {
    isBusy = true;
    const res = await fetchNui('getCityModule', { module: 'stores' });
    isBusy = false;

    if (!res || !res.ok) {
      showToast((res && res.message) || 'Falha ao carregar lojas do servidor.', 'error');
      return;
    }

    const payload = res.data || res;
    allStores = Array.isArray(payload.records) ? payload.records : [];
    currentRevision = payload.revision || '';

    // Pre-index records for instant filtering & search
    const len = allStores.length;
    for (let i = 0; i < len; i++) {
      const s = allStores[i];
      const isPublic = !s.permission || s.permission === '' || s.permission === 'null' || s.permission === 'false';
      const permText = isPublic ? 'Pública' : s.permission;
      const typeLabel = defaultTypeLabels[s.type] || s.type || 'Loja';
      s._isPublic = isPublic;
      s._permText = permText;
      s._typeLabel = typeLabel;
      s._safeId = escapeHtml(s.id || '');
      s._safeName = escapeHtml(s.name || typeLabel);
      s._searchText = `${s.id || ''} ${s.name || ''} ${typeLabel} ${s.type || ''} ${permText} ${isPublic ? 'publica pública livre civil' : 'restrita faccao facção job'} ${s.showBlip ? 'mapa visivel visível blip' : 'oculta oculto sem blip'} ${s.x || ''} ${s.y || ''}`.toLowerCase();
    }

    const revBadge = document.getElementById('revisionBadge');
    if (revBadge) revBadge.textContent = `rev: ${currentRevision || 'init'}`;

    renderStores();
  }

  window.reconcileStores = async function () {
    if (isBusy) return;
    const btnSync = document.getElementById('btnSync');
    if (btnSync) btnSync.classList.add('btn-loading');

    isBusy = true;
    const res = await fetchNui('executeCityAction', {
      module: 'stores',
      action: 'reconcile',
      data: {},
      revision: currentRevision,
    });
    isBusy = false;

    if (btnSync) btnSync.classList.remove('btn-loading');

    if (res && res.ok) {
      showToast(res.message || 'Lojas reconciliadas do banco de dados com sucesso!', 'success');
      if (res.data && Array.isArray(res.data.records)) {
        allStores = res.data.records;
        currentRevision = res.data.revision || currentRevision;
        loadStores();
      } else {
        loadStores();
      }
    } else {
      showToast((res && res.message) || 'Falha ao reconciliar lojas.', 'error');
    }
  };

  // --------------------------------------------------------------------------
  // Rendering & Filtering
  // --------------------------------------------------------------------------
  function renderStores() {
    let countAll = 0;
    let countClothing = 0;
    let countBarber = 0;
    let countTattoo = 0;
    let countSurgeon = 0;
    let countBlipVisible = 0;
    let countBlipHidden = 0;
    let countPublic = 0;
    let countJob = 0;

    const filtered = [];
    const q = searchQuery.trim().toLowerCase();

    for (let i = 0; i < allStores.length; i++) {
      const s = allStores[i];

      // Counters
      countAll++;
      if (s.type === 'clothing') countClothing++;
      if (s.type === 'barber') countBarber++;
      if (s.type === 'tattoo') countTattoo++;
      if (s.type === 'surgeon') countSurgeon++;
      if (s.showBlip) countBlipVisible++;
      else countBlipHidden++;
      if (s._isPublic) countPublic++;
      else countJob++;

      // Filter check
      if (currentFilter === 'clothing' && s.type !== 'clothing') continue;
      if (currentFilter === 'barber' && s.type !== 'barber') continue;
      if (currentFilter === 'tattoo' && s.type !== 'tattoo') continue;
      if (currentFilter === 'surgeon' && s.type !== 'surgeon') continue;
      if (currentFilter === 'blip-visible' && !s.showBlip) continue;
      if (currentFilter === 'blip-hidden' && s.showBlip) continue;
      if (currentFilter === 'public' && !s._isPublic) continue;
      if (currentFilter === 'job' && s._isPublic) continue;

      // Search match
      if (q && !s._searchText.includes(q)) continue;

      filtered.push(s);
    }

    // Update Counters in Chips
    updateText('countAll', countAll);
    updateText('countClothing', countClothing);
    updateText('countBarber', countBarber);
    updateText('countTattoo', countTattoo);
    updateText('countSurgeon', countSurgeon);
    updateText('countBlipVisible', countBlipVisible);
    updateText('countBlipHidden', countBlipHidden);
    updateText('countPublic', countPublic);
    updateText('countJob', countJob);

    // Update Footer Stats
    updateText('footerTotal', countAll);
    updateText('footerBlipCount', countBlipVisible);
    updateText('footerPublicCount', countPublic);
    updateText('footerJobCount', countJob);

    const tableView = document.getElementById('tableView');
    const cardsView = document.getElementById('cardsView');
    const emptyState = document.getElementById('emptyState');

    if (filtered.length === 0) {
      if (tableView) tableView.style.display = 'none';
      if (cardsView) cardsView.style.display = 'none';
      if (emptyState) emptyState.style.display = 'flex';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    if (viewMode === 'table') {
      if (cardsView) cardsView.style.display = 'none';
      if (tableView) tableView.style.display = 'block';
      renderTableRows(filtered);
    } else {
      if (tableView) tableView.style.display = 'none';
      if (cardsView) cardsView.style.display = 'grid';
      renderCards(filtered);
    }
  }

  function updateText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function renderTableRows(stores) {
    const tbody = document.getElementById('storesTableBody');
    if (!tbody) return;

    let html = '';
    for (let i = 0; i < stores.length; i++) {
      const s = stores[i];
      const typeBadgeClass = `badge-${s.type || 'clothing'}`;
      const typeIcon = defaultTypeIcons[s.type] || 'fa-store';
      const blipClass = s.showBlip ? 'tag-blip--visible' : 'tag-blip--hidden';
      const blipText = s.showBlip ? '<i class="fa-solid fa-eye"></i> No Mapa' : '<i class="fa-solid fa-eye-slash"></i> Oculto';
      const permBadge = s._isPublic
        ? '<span class="badge-perm badge-perm--public">Pública</span>'
        : `<span class="badge-perm badge-perm--job"><i class="fa-solid fa-lock"></i> ${escapeHtml(s.permission)}</span>`;

      const coordsStr = `${s.x.toFixed(2)}, ${s.y.toFixed(2)}, ${s.z.toFixed(2)}`;

      html += `
        <tr>
          <td><span class="id-badge">#${s._safeId}</span></td>
          <td>
            <div class="store-name-cell">
              <i class="fa-solid ${typeIcon}" style="color: var(--gold); font-size: 13px;"></i>
              <span>${s._safeName}</span>
            </div>
          </td>
          <td>
            <span class="badge-category ${typeBadgeClass}">
              <i class="fa-solid ${typeIcon}"></i> ${escapeHtml(s._typeLabel)}
            </span>
          </td>
          <td>${permBadge}</td>
          <td>
            <span class="tag-blip ${blipClass}" onclick="window.toggleStoreBlip(${s.id})" title="Clique para alternar visibilidade no mapa">
              ${blipText}
            </span>
          </td>
          <td>
            <span class="coords-pill" onclick="window.copyCoords('${coordsStr}')" title="Clique para copiar coordenadas">
              <i class="fa-regular fa-copy"></i>
              <span>${coordsStr}</span>
            </span>
          </td>
          <td>
            <div class="actions-cell">
              <button class="btn-icon-action btn-icon-action--teleport" onclick="window.teleportToStore(${s.id})" title="Teleportar até a loja">
                <i class="fa-solid fa-location-crosshairs"></i>
              </button>
              <button class="btn-icon-action btn-icon-action--open" onclick="window.openTargetModalForStore('${s.type}')" title="Abrir em um jogador">
                <i class="fa-solid fa-user-pen"></i>
              </button>
              <button class="btn-icon-action btn-icon-action--edit" onclick="window.openEditModal(${s.id})" title="Editar parâmetros">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-icon-action btn-icon-action--delete" onclick="window.openDeleteModal(${s.id})" title="Excluir loja">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }
    tbody.innerHTML = html;
  }

  function renderCards(stores) {
    const container = document.getElementById('cardsView');
    if (!container) return;

    let html = '';
    for (let i = 0; i < stores.length; i++) {
      const s = stores[i];
      const typeBadgeClass = `badge-${s.type || 'clothing'}`;
      const typeIcon = defaultTypeIcons[s.type] || 'fa-store';
      const blipClass = s.showBlip ? 'tag-blip--visible' : 'tag-blip--hidden';
      const blipText = s.showBlip ? '<i class="fa-solid fa-eye"></i> No Mapa' : '<i class="fa-solid fa-eye-slash"></i> Oculto';
      const permBadge = s._isPublic
        ? '<span class="badge-perm badge-perm--public">Pública</span>'
        : `<span class="badge-perm badge-perm--job"><i class="fa-solid fa-lock"></i> ${escapeHtml(s.permission)}</span>`;

      const coordsStr = `${s.x.toFixed(2)}, ${s.y.toFixed(2)}, ${s.z.toFixed(2)}`;

      html += `
        <div class="store-card">
          <div class="store-card__header">
            <div class="store-card__title-group">
              <span class="store-card__id">#${s._safeId}</span>
              <h3 class="store-card__title">${s._safeName}</h3>
            </div>
            <span class="badge-category ${typeBadgeClass}">
              <i class="fa-solid ${typeIcon}"></i> ${escapeHtml(s._typeLabel)}
            </span>
          </div>

          <div class="store-card__badges">
            ${permBadge}
            <span class="tag-blip ${blipClass}" onclick="window.toggleStoreBlip(${s.id})" title="Alternar visibilidade no mapa">
              ${blipText}
            </span>
          </div>

          <div class="store-card__coords" onclick="window.copyCoords('${coordsStr}')" title="Clique para copiar">
            <span><i class="fa-solid fa-location-dot"></i> ${coordsStr}</span>
            <i class="fa-regular fa-copy" style="cursor: pointer;"></i>
          </div>

          <div class="store-card__actions">
            <button class="btn btn-sm btn-secondary" onclick="window.teleportToStore(${s.id})" title="Teleportar até a loja">
              <i class="fa-solid fa-location-crosshairs"></i> Teleportar
            </button>
            <button class="btn btn-sm btn-secondary" onclick="window.openEditModal(${s.id})" title="Editar">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-sm btn-secondary" style="color: var(--rose);" onclick="window.openDeleteModal(${s.id})" title="Excluir">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;
    }
    container.innerHTML = html;
  }

  // --------------------------------------------------------------------------
  // Blip Toggle & Teleport
  // --------------------------------------------------------------------------
  window.toggleStoreBlip = async function (id) {
    if (isBusy) return;
    const store = allStores.find((s) => s.id === id);
    if (!store) return;

    // Optimistic UI
    store.showBlip = !store.showBlip;
    renderStores();

    isBusy = true;
    const res = await fetchNui('executeCityAction', {
      module: 'stores',
      action: 'toggle_blip',
      data: { id: id },
      revision: currentRevision,
    });
    isBusy = false;

    if (res && res.ok) {
      showToast(res.message || 'Status do blip atualizado com sucesso!', 'success');
      currentRevision = res.data && res.data.revision ? res.data.revision : currentRevision;
      loadStores();
    } else {
      // Rollback
      store.showBlip = !store.showBlip;
      renderStores();
      showToast((res && res.message) || 'Falha ao alterar blip no mapa.', 'error');
    }
  };

  window.teleportToStore = async function (id) {
    const store = allStores.find((s) => s.id === id);
    if (!store) return;

    const res = await fetchNui('teleportToCoords', {
      coords: {
        x: store.x,
        y: store.y,
        z: store.z,
        heading: store.heading || 0.0,
      },
    });

    if (res && res.ok) {
      showToast(`Teleportado para a loja ${store.name || '#' + store.id}!`, 'success');
    } else {
      showToast((res && res.message) || 'Falha ao teleportar.', 'error');
    }
  };

  window.copyCoords = function (str) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(str).then(() => {
        showToast('Coordenadas copiadas para a área de transferência!', 'info');
      });
    } else {
      showToast(`Coordenadas: ${str}`, 'info');
    }
  };

  // --------------------------------------------------------------------------
  // Modal: Criar / Editar Loja
  // --------------------------------------------------------------------------
  window.openCreateModal = function () {
    const form = document.getElementById('storeForm');
    if (form) form.reset();

    document.getElementById('formStoreId').value = '';
    document.getElementById('storeModalTitle').textContent = 'Nova Loja';
    document.getElementById('storeModalIcon').className = 'fa-solid fa-store modal-title-icon';
    document.getElementById('formStoreShowBlip').checked = true;

    document.getElementById('storeModal').style.display = 'flex';
    document.getElementById('formStoreName').focus();
  };

  window.openEditModal = function (id) {
    const store = allStores.find((s) => s.id === id);
    if (!store) return;

    document.getElementById('formStoreId').value = store.id;
    document.getElementById('storeModalTitle').textContent = `Editar Loja #${store.id}`;
    document.getElementById('storeModalIcon').className = 'fa-solid fa-pen-to-square modal-title-icon';

    document.getElementById('formStoreName').value = store.name || '';
    document.getElementById('formStoreType').value = store.type || 'clothing';
    document.getElementById('formStorePermission').value = store.permission || '';
    document.getElementById('formStoreShowBlip').checked = store.showBlip !== false;

    document.getElementById('formCoordX').value = store.x;
    document.getElementById('formCoordY').value = store.y;
    document.getElementById('formCoordZ').value = store.z;
    document.getElementById('formCoordH').value = store.heading || 0.0;

    document.getElementById('storeModal').style.display = 'flex';
    document.getElementById('formStoreName').focus();
  };

  window.closeStoreModal = function () {
    document.getElementById('storeModal').style.display = 'none';
  };

  window.capturePosition = async function () {
    showToast('Posicione-se no local desejado no jogo e pressione ENTER...', 'info');

    const res = await fetchNui('detectWorldObject', { kind: 'store' });

    if (res && res.ok && res.data) {
      const coords = res.data.coords || res.data;
      if (coords.x !== undefined) document.getElementById('formCoordX').value = coords.x;
      if (coords.y !== undefined) document.getElementById('formCoordY').value = coords.y;
      if (coords.z !== undefined) document.getElementById('formCoordZ').value = coords.z;
      if (coords.heading !== undefined || res.data.heading !== undefined) {
        document.getElementById('formCoordH').value = coords.heading !== undefined ? coords.heading : res.data.heading;
      }
      showToast('Posição e ângulo capturados com sucesso do jogo!', 'success');
    } else {
      showToast((res && res.message) || 'Captura de posição cancelada.', 'info');
    }
  };

  window.saveStore = async function (e) {
    e.preventDefault();
    if (isBusy) return;

    const idStr = document.getElementById('formStoreId').value;
    const isEdit = Boolean(idStr);

    const payload = {
      id: isEdit ? Number(idStr) : undefined,
      name: document.getElementById('formStoreName').value.trim(),
      type: document.getElementById('formStoreType').value,
      permission: document.getElementById('formStorePermission').value.trim() || null,
      showBlip: document.getElementById('formStoreShowBlip').checked,
      coords: {
        x: parseFloat(document.getElementById('formCoordX').value),
        y: parseFloat(document.getElementById('formCoordY').value),
        z: parseFloat(document.getElementById('formCoordZ').value),
        heading: parseFloat(document.getElementById('formCoordH').value || '0.0'),
      },
    };

    const action = isEdit ? 'update_store' : 'create_store';
    const btnSave = document.getElementById('btnSaveStore');
    if (btnSave) btnSave.disabled = true;

    isBusy = true;
    const res = await fetchNui('executeCityAction', {
      module: 'stores',
      action: action,
      data: payload,
      revision: currentRevision,
    });
    isBusy = false;

    if (btnSave) btnSave.disabled = false;

    if (res && res.ok) {
      showToast(res.message || 'Loja salva com sucesso!', 'success');
      window.closeStoreModal();
      loadStores();
    } else {
      showToast((res && res.message) || 'Falha ao salvar loja.', 'error');
    }
  };

  // --------------------------------------------------------------------------
  // Modal: Abrir no Jogador Online
  // --------------------------------------------------------------------------
  window.openTargetModal = function () {
    document.getElementById('targetInput').value = '';
    document.getElementById('targetShopType').value = 'clothing';
    document.getElementById('targetModal').style.display = 'flex';
    document.getElementById('targetInput').focus();
  };

  window.openTargetModalForStore = function (shopType) {
    document.getElementById('targetInput').value = '';
    document.getElementById('targetShopType').value = shopType || 'clothing';
    document.getElementById('targetModal').style.display = 'flex';
    document.getElementById('targetInput').focus();
  };

  window.closeTargetModal = function () {
    document.getElementById('targetModal').style.display = 'none';
  };

  window.executeOpenForPlayer = async function (e) {
    e.preventDefault();
    if (isBusy) return;

    const targetInput = document.getElementById('targetInput').value.trim();
    const shopType = document.getElementById('targetShopType').value;

    if (!targetInput) {
      showToast('Informe o Passaporte ou CitizenID do jogador.', 'error');
      return;
    }

    const btn = document.getElementById('btnConfirmOpenTarget');
    if (btn) btn.disabled = true;

    isBusy = true;
    const res = await fetchNui('executeCityAction', {
      module: 'stores',
      action: 'open_for_player',
      data: {
        targetId: targetInput,
        shopType: shopType,
      },
      revision: currentRevision,
    });
    isBusy = false;

    if (btn) btn.disabled = false;

    if (res && res.ok) {
      showToast(res.message || 'Loja aberta para o jogador com sucesso!', 'success');
      window.closeTargetModal();
    } else {
      showToast((res && res.message) || 'Falha ao abrir loja para o jogador.', 'error');
    }
  };

  // --------------------------------------------------------------------------
  // Modal: Confirmar Exclusão
  // --------------------------------------------------------------------------
  window.openDeleteModal = function (id) {
    const store = allStores.find((s) => s.id === id);
    if (!store) return;

    pendingDelete = store;
    document.getElementById('deleteConfirmMessage').innerHTML = `
      Tem certeza de que deseja excluir a loja <strong>"${escapeHtml(store.name || '#' + store.id)}"</strong> (${escapeHtml(store._typeLabel)})?
      <br><br>
      Esta alteração removerá o ponto de interação e o blip no mapa para todos os cidadãos imediatamente.
    `;
    document.getElementById('deleteModal').style.display = 'flex';
  };

  window.closeDeleteModal = function () {
    pendingDelete = null;
    document.getElementById('deleteModal').style.display = 'none';
  };

  window.executeDeleteStore = async function () {
    if (!pendingDelete || isBusy) return;

    const storeId = pendingDelete.id;
    const btn = document.getElementById('btnConfirmDelete');
    if (btn) btn.disabled = true;

    isBusy = true;
    const res = await fetchNui('executeCityAction', {
      module: 'stores',
      action: 'delete_store',
      data: { id: storeId },
      revision: currentRevision,
    });
    isBusy = false;

    if (btn) btn.disabled = false;

    if (res && res.ok) {
      showToast(res.message || 'Loja excluída com sucesso!', 'success');
      window.closeDeleteModal();
      loadStores();
    } else {
      showToast((res && res.message) || 'Falha ao excluir loja.', 'error');
    }
  };

  // --------------------------------------------------------------------------
  // View Modes & Search
  // --------------------------------------------------------------------------
  window.setViewMode = function (mode) {
    viewMode = mode;
    const btnTable = document.getElementById('viewModeTable');
    const btnCards = document.getElementById('viewModeCards');

    if (btnTable) btnTable.classList.toggle('active', mode === 'table');
    if (btnCards) btnCards.classList.toggle('active', mode === 'cards');

    renderStores();
  };

  window.clearSearchAndFilters = function () {
    searchQuery = '';
    currentFilter = 'all';

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';

    const chips = document.querySelectorAll('.chip-btn');
    chips.forEach((c) => c.classList.toggle('active', c.getAttribute('data-filter') === 'all'));

    renderStores();
  };

  // --------------------------------------------------------------------------
  // Event Bindings
  // --------------------------------------------------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    // Search input
    const searchInput = document.getElementById('searchInput');
    const searchClear = document.getElementById('searchClear');

    if (searchInput) {
      let debounceTimer = null;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        searchQuery = e.target.value;
        if (searchClear) searchClear.style.display = searchQuery ? 'block' : 'none';
        debounceTimer = setTimeout(renderStores, 150);
      });
    }

    if (searchClear) {
      searchClear.addEventListener('click', () => {
        if (searchInput) {
          searchInput.value = '';
          searchQuery = '';
          searchClear.style.display = 'none';
          renderStores();
          searchInput.focus();
        }
      });
    }

    // Filter Chips
    const chips = document.querySelectorAll('.chip-btn');
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        currentFilter = chip.getAttribute('data-filter') || 'all';
        renderStores();
      });
    });

    // Keyboard ESC closes modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        window.closeStoreModal();
        window.closeTargetModal();
        window.closeDeleteModal();
      }
    });

    // Initial load
    loadStores();
  });
})();
