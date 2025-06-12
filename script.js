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
        description: "NewJeans 的第二張迷你專輯，包含熱門曲目 'Super Shy' 和 'ETA'。展現了更成熟的音樂風格與獨特魅力。",
        genre: "K-pop, R&B",
        price: "NT$ 450",
        publisher: "ADOR Entertainment",
        trackCount: 5,
        totalLength: "16分23秒",
        tracks: [
            {
                name: "New Jeans",
                length: "3:12",
                description: "開場曲目，展現清新活力的舞曲"
            },
            {
                name: "Super Shy",
                length: "2:34",
                description: "充滿青春感的熱門主打歌"
            },
            {
                name: "ETA",
                length: "3:41",
                description: "節奏輕快的現代R&B歌曲"
            },
            {
                name: "Cool With You",
                length: "3:01",
                description: "浪漫情歌，展現柔美嗓音"
            },
            {
                name: "Get Up",
                length: "3:55",
                description: "專輯同名歌曲，富有能量的舞曲"
            }
        ]
    },    {
        id: 2,
        title: "BORN PINK",
        artist: "BLACKPINK",
        releaseDate: "2022-09-16",
        cover: "https://source.unsplash.com/random/400x400/?album-cover-2",
        description: "BLACKPINK 第二張正規專輯，延續其獨特的音樂風格，融合Hip-hop與流行元素，展現了更成熟的音樂製作與表演實力。",
        genre: "K-pop, Hip-hop, EDM",
        price: "NT$ 499",
        publisher: "YG Entertainment",
        trackCount: 8,
        totalLength: "24分54秒",
        tracks: [
            {
                name: "Pink Venom",
                length: "3:07",
                description: "前導主打歌，融合東方元素的Hip-hop曲風"
            },
            {
                name: "Shut Down",
                length: "2:55",
                description: "主打歌，采用古典音樂元素混搭現代節奏"
            },
            {
                name: "Typa Girl",
                length: "3:21",
                description: "展現自信態度的英文歌曲"
            },
            {
                name: "Ready For Love",
                length: "2:57",
                description: "與電競遊戲PUBG合作的特別曲目"
            },
            {
                name: "Hard to Love",
                length: "2:43",
                description: "Rosé個人獨唱曲目，展現獨特嗓音"
            },
            {
                name: "The Happiest Girl",
                length: "3:33",
                description: "抒情歌曲，展現成員們細膩的感情表達"
            },
            {
                name: "Tally",
                length: "3:03",
                description: "帶有R&B風格的英文歌曲"
            },
            {
                name: "Yeah Yeah Yeah",
                length: "3:15",
                description: "復古風格的流行舞曲"
            }
        ]
    },    {
        id: 3,
        title: "Face",
        artist: "Jimin (BTS)",
        releaseDate: "2023-03-24",
        cover: "https://source.unsplash.com/random/400x400/?album-cover-3",
        description: "BTS成員朴智旻首張個人專輯，透過音樂展現獨特的音樂風格與藝術視野。專輯中完美融合R&B、流行等多種音樂元素，展現出作為獨立音樂人的全新面貌。",
        genre: "K-pop, R&B, Pop",
        price: "NT$ 475",
        publisher: "BIGHIT MUSIC",
        trackCount: 6,
        totalLength: "21分36秒",
        tracks: [
            {
                name: "Face-off",
                length: "3:31",
                description: "開場曲，展現強烈的節奏感與獨特音色"
            },
            {
                name: "Like Crazy",
                length: "3:23",
                description: "主打歌，富有魅力的舞曲風格"
            },
            {
                name: "Alone",
                length: "3:56",
                description: "富有感情的抒情歌曲"
            },
            {
                name: "Set Me Free Pt.2",
                length: "3:29",
                description: "充滿力量感的說唱舞曲"
            },
            {
                name: "Like Crazy (English Version)",
                length: "3:24",
                description: "英文版主打歌"
            },
            {
                name: "Like Crazy (Instrumental)",
                length: "3:53",
                description: "主打歌器樂版本"
            }
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
                            <div class="col-md-5">
                                <img src="${album.cover}" alt="${album.title}" class="img-fluid album-cover">
                                <div class="album-price mt-3">
                                    <h3 class="text-primary">${album.price || 'NT$ 450'}</h3>
                                    <button class="btn btn-primary btn-lg w-100 mt-2">
                                        <i class="bi bi-cart-plus"></i> 加入購物車
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="album-details">
                                    <h4 class="artist-name">${album.artist}</h4>
                                    <p class="description">${album.description}</p>
                                    
                                    <div class="album-meta">
                                        <div class="meta-item">
                                            <span class="label">發行日期：</span>
                                            <span class="value">${album.releaseDate}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="label">音樂類型：</span>
                                            <span class="value">${album.genre || 'K-pop'}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="label">發行公司：</span>
                                            <span class="value">${album.publisher || '未提供'}</span>
                                        </div>
                                        <div class="meta-item">
                                            <span class="label">專輯長度：</span>
                                            <span class="value">${album.totalLength || '未提供'}</span>
                                        </div>
                                    </div>
                                    
                                    <h5 class="mt-4">收錄曲目：</h5>
                                    <div class="track-list">
                                        ${Array.isArray(album.tracks) ? album.tracks.map((track, index) => `
                                            <div class="track-item">
                                                <div class="track-number">${(index + 1).toString().padStart(2, '0')}</div>
                                                <div class="track-info">
                                                    <div class="track-name">${typeof track === 'object' ? track.name : track}</div>
                                                    ${typeof track === 'object' ? `
                                                        <div class="track-details">
                                                            <span class="track-length">${track.length}</span>
                                                            <p class="track-description">${track.description}</p>
                                                        </div>
                                                    ` : ''}
                                                </div>
                                            </div>
                                        `).join('') : ''}
                                    </div>
                                </div>
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