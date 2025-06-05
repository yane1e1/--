// 初始化 AOS 動畫
AOS.init();

// 專輯資料
const albums = [
    {
        id: 1,
        title: "NewJeans 'Get Up'",
        artist: "NewJeans",
        releaseDate: "2023-07-21",
        cover: "https://source.unsplash.com/random/400x400/?album-cover-1",
        description: "NewJeans 的第二張迷你專輯，包含熱門曲目 'Super Shy' 和 'ETA'。",
        tracks: [
            "New Jeans",
            "Super Shy",
            "ETA",
            "Cool With You",
            "Get Up"
        ]
    },
    {
        id: 2,
        title: "Girls",
        artist: "BLACKPINK",
        releaseDate: "2022-09-16",
        cover: "https://source.unsplash.com/random/400x400/?album-cover-2",
        description: "BLACKPINK 第二張正規專輯，收錄多首熱門歌曲。",
        tracks: [
            "Pink Venom",
            "Shut Down",
            "Typa Girl",
            "Ready For Love",
            "Hard to Love"
        ]
    },
    {
        id: 3,
        title: "Face",
        artist: "Jimin",
        releaseDate: "2023-03-24",
        cover: "https://source.unsplash.com/random/400x400/?album-cover-3",
        description: "BTS 成員 Jimin 首張個人專輯，展現獨特魅力。",
        tracks: [
            "Face-off",
            "Like Crazy",
            "Alone",
            "Set Me Free Pt.2",
            "Like Crazy (English Version)"
        ]
    }
];

// 生成專輯卡片
function renderAlbums() {
    const albumList = document.getElementById('albumList');
    
    albums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <div class="album-card" onclick="showAlbumDetails(${album.id})">
                <img src="${album.cover}" alt="${album.title}">
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.artist}</p>
                    <small class="text-muted">發行日期: ${album.releaseDate}</small>
                </div>
            </div>
        `;
        albumList.appendChild(card);
    });
}

// 顯示專輯詳細資訊
function showAlbumDetails(albumId) {
    const album = albums.find(a => a.id === albumId);
    
    const modalHtml = `
        <div class="modal fade" id="albumModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${album.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${album.cover}" alt="${album.title}" class="img-fluid">
                            </div>
                            <div class="col-md-6">
                                <h4>${album.artist}</h4>
                                <p>${album.description}</p>
                                <h5>收錄曲目：</h5>
                                <ul class="track-list">
                                    ${album.tracks.map(track => `<li>${track}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 移除舊的 modal（如果存在）
    const oldModal = document.getElementById('albumModal');
    if (oldModal) {
        oldModal.remove();
    }

    // 添加新的 modal
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // 顯示 modal
    const modal = new bootstrap.Modal(document.getElementById('albumModal'));
    modal.show();
}

// 搜尋和過濾功能
function filterAlbums() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const dateFilter = document.getElementById('dateFilter').value;
    const albumList = document.getElementById('albumList');
    albumList.innerHTML = '';

    const filteredAlbums = albums.filter(album => {
        const matchesSearch = 
            album.title.toLowerCase().includes(searchTerm) ||
            album.artist.toLowerCase().includes(searchTerm);
        
        const matchesDate = !dateFilter || 
            album.releaseDate.startsWith(dateFilter);

        return matchesSearch && matchesDate;
    });

    if (filteredAlbums.length === 0) {
        albumList.innerHTML = `
            <div class="col-12 text-center">
                <p class="text-muted">沒有找到符合條件的專輯</p>
            </div>
        `;
        return;
    }

    filteredAlbums.forEach(album => {
        const card = document.createElement('div');
        card.className = 'col-md-4';
        card.setAttribute('data-aos', 'fade-up');
        card.innerHTML = `
            <div class="album-card" onclick="showAlbumDetails(${album.id})">
                <img src="${album.cover}" alt="${album.title}">
                <div class="album-info">
                    <h3>${album.title}</h3>
                    <p>${album.artist}</p>
                    <small class="text-muted">發行日期: ${album.releaseDate}</small>
                </div>
            </div>
        `;
        albumList.appendChild(card);
    });
}

// 事件監聽器設置
document.addEventListener('DOMContentLoaded', () => {
    renderAlbums();
    
    // 搜尋按鈕點擊事件
    document.getElementById('searchBtn').addEventListener('click', filterAlbums);
    
    // 搜尋輸入框 Enter 鍵事件
    document.getElementById('searchInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterAlbums();
        }
    });
    
    // 日期過濾器變更事件
    document.getElementById('dateFilter').addEventListener('change', filterAlbums);
    
    // 重置按鈕點擊事件
    document.getElementById('resetFilterBtn').addEventListener('click', () => {
        document.getElementById('searchInput').value = '';
        document.getElementById('dateFilter').value = '';
        renderAlbums();
    });
});