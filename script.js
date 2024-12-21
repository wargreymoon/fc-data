const players = {
    "维尔茨": [
        {
            "位置": "前锋",
            "能力值": 144,
            "耐力": 182,
            "天赋": 19,
            "频率": 779,
            "射门": 765,
            "传球": 786,
            "灵活性": 796,
            "防守": 664,
            "体格": 705,
            "图片": "weitz.jpg"
        }
    ],
    "梅西": [
        {
            "位置": "前锋",
            "能力值": 95,
            "耐力": 180,
            "天赋": 20,
            "频率": 90,
            "射门": 95,
            "传球": 92,
            "灵活性": 91,
            "防守": 50,
            "体格": 70,
            "图片": "footballer picture/messi1.png"
        },
        {
            "位置": "前锋",
            "能力值": 96,
            "耐力": 182,
            "天赋": 21,
            "频率": 91,
            "射门": 96,
            "传球": 93,
            "灵活性": 92,
            "防守": 51,
            "体格": 71,
            "图片": "footballer picture/messi2.png"
        }
    ],
    "C罗": [
        {
            "位置": "前锋",
            "能力值": 94,
            "耐力": 178,
            "天赋": 19,
            "频率": 88,
            "射门": 94,
            "传球": 85,
            "灵活性": 90,
            "防守": 55,
            "体格": 80,
            "图片": "cr7_version1.jpg"
        },
        {
            "位置": "前锋",
            "能力值": 95,
            "耐力": 180,
            "天赋": 20,
            "频率": 89,
            "射门": 95,
            "传球": 86,
            "灵活性": 91,
            "防守": 56,
            "体格": 81,
            "图片": "cr7_version2.jpg"
        }
    ],
    "内马尔": [
        {
            "位置": "前锋",
            "能力值": 90,
            "耐力": 175,
            "天赋": 18,
            "频率": 85,
            "射门": 89,
            "传球": 87,
            "灵活性": 93,
            "防守": 45,
            "体格": 68,
            "图片": "footballer picture/neymar_version1.jpg"
        }
    ]
};

function searchPlayer() {
    const playerName = document.getElementById('playerName').value;
    const playerStats = document.getElementById('playerStats');
    playerStats.innerHTML = ''; // 清空之前的结果

    if (players[playerName]) {
        players[playerName].forEach((stats, index) => {
            playerStats.innerHTML += `
                <div class="player-card">
                    <div class="player-info">
                        <img src="${stats['图片']}" alt="${playerName}" class="player-image">
                        <div class="player-details">
                            <h2>${playerName} <span class="version">版本: ${index + 1}</span></h2>
                            <p><strong>能力值: ${stats['能力值']}</strong></p>
                            <p>位置: ${stats['位置']}</p>
                            <p>耐力: ${stats['耐力']}</p>
                            <p>天赋: ${stats['天赋']}</p>
                        </div>
                    </div>
                    <div class="player-stats">
                        <div class="stats-row">
                            <p>频率: ${stats['频率']}</p>
                            <p>射门: ${stats['射门']}</p>
                        </div>
                        <div class="stats-row">
                            <p>传球: ${stats['传球']}</p>
                            <p>灵活性: ${stats['灵活性']}</p>
                        </div>
                        <div class="stats-row">
                            <p>防守: ${stats['防守']}</p>
                            <p>体格: ${stats['体格']}</p>
                        </div>
                    </div>
                </div>
                <hr class="divider">
            `;
        });
    } else {
        playerStats.innerHTML = `<p>未找到该球员的数值。</p>`;
    }
} 