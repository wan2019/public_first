const main = () => {
    const html = `
    ${Page.twoHtml()}
    ${Page.threeHtml()}
    ${Page.fourHtml()}
    `;
    $('#App').html(html);
};
const Page = {};
Page.oneHtml = () => {
    const html = `
    <section id="sec1">
    <h3>
        Learn more
        <div class="round" href="#sec2">﹀</div>
    </h3>

    <div>
        <nav>
            <h1><a href="#sec1">Wan</a></h1>
            <!--meun 按鈕-->
            <div id="menu">
                <div class="menu1"></div>
                <div id="menu2"></div>
                <div id="menu3"></div>
                <div class="menu4"></div>
            </div>
            <div id="list">
                <ul>
                    <li><a href="#sec1">HOME</a></li>
                    <li><a href="#sec2">ABOUT</a></li>
                    <li><a href="#sec3">EXPERIENCES</a></li>
                    <li><a href="#sec4">SKILL</a></li>
                </ul>
            </div>
        </nav>
    </div>
    <div>
        <div id="sec1a"><h1>Wan</h1></div>
        <div id="sec1b"><h1>Chen</h1></div>
    </div>
</section>`;

    return html;
};
Page.twoHtml = () => {
    const html = `
    <section id="sec2">
    <div>
        <div class="imgOut">
            <img class="img2" src="img/s3-1.jpg" alt="" />
        </div>

        <div id="sec2b">
            <h2>About Me</h2>

            <ul>
                <li>陳琬珍 性別 ： 女 年紀： 24</li>
                <li>1995.08.03</li>
                <li>技能： </li>
                <li>HTML5 / CSS3 / SCSS / JavaScript / Jquery / Ajax / React / RWD / SPA / Git / Figma</li>
                <br />
                <li>
                    - 能夠獨立在不依賴框架軟體(model2)的情況下，使用html /
                    css和JQuery，做出響應式（同時適用手機、電腦、平板瀏覽）的網站
                </li>
                <li>- 重視使用者體驗(UX)，根據使用者的習慣，做出最直覺好用的設計</li>
                <br class="change" />
                <div></div>
                <li>專長、興趣</li>
                <li>
                    <ul>
                        <li class="l1">
                            甜點 愛好甜食，曾任職甜點師<br />設計 喜歡視覺設計、Web開發
                            <br />插畫 繪製Line貼圖
                        </li>
                        <li class="l2">
                            爬山 年初完成玉山登頂 <br />熱愛極限運動 鐵人三項半程完賽<br />旅行
                            多次獨自自助旅行
                        </li>
                    </ul>
                </li>
                <li></li>
            </ul>
        </div>
        <div id="sec2a">
            <img class="none" src="img/s3.jpg" alt="" />
        </div>
    </div>
</section>`;
    return html;
};
Page.threeHtml = () => {
    const html = `
    <section id="sec3">
    <h3>Experiences</h3>
    <div class="sec3a">
        <div></div>
        <br />
        <div></div>
        <br />
        <div></div>
        <br />
        <div></div>
        <br />
    </div>
    <ul class="sec3b">
        <li>
            法式甜點師
            <p>
                2015～2016(1年半)<br />初入西點領域時，常在下班後看書自學<br />喜歡完成成品的成就感
            </p>
        </li>
        <li>
            澳洲打工度假
            <p>
                2016～2017(1年)<br />
                學習到獨立、解決問題的能力。曾為了快速上手餐廳的POS系統，在一個禮拜內學會漢英輸入法
            </p>
        </li>
        <li>
            義式甜點師
            <p>
                2018～2019(1年)<br />
                與義籍等多國同事共事 理解團隊合作分工的重要性
            </p>
        </li>

        <li>
            前端工程師
            <p>
                2019.10～now(在職中)<br />
                能獨立完成小型專案
                <br>
                與後端串接Api，完成前後端分離的前端網頁
                <br>
                學習網站設計與網頁製作 動態及互動網站前端技術
            </p>
        </li>
    </ul>
</section>`;
    return html;
};
Page.fourHtml = () => {
    const html = `
    <section id="sec4">
    <div>
        <div id="s401">
            <a
                href="https://github.com/wan2019/louise.github.io"
                target="_blank"
                ><img src="img/github1.jpg" alt=""
            /></a>
        </div>
        <div id="s402">
            <a href="https://iotlouise.firebaseapp.com/" target="_blank"
                ><img src="img/t2.png" alt=""
            /></a>
        </div>
        <div id="s403">
            <a href="https://hackmd.io/@wan2019/rysZZE52I/%2FjRqH2FDKTxeTYhX_2nLgqA" target="_blank"
                ><img src="img/HackMD-02.png" alt=""
            /></a>
        </div>
        <div id="s404">
            <a
                href="https://www.evernote.com/l/ANXWarunCLNLlqdTpjmd_npwM50Uj8nlDbM"
                target="_blank"
                ><img src="img/Chen%20Wan%20Chen%20(1).jpg" alt=""
            /></a>
        </div>
        <div id="s405">
            <a href="louise_web_3/index.html" target="_blank"
                ><img src="img/xc.png" alt=""
            /></a>
        </div>
        <div id="s406">
            <a href="" target="_blank"><img src="img/codesandbox.png" alt="" /></a>
        </div>
    </div>
</section>`;
    return html;
};
Page.fiveHtml = () => {
    const html = `<section id="sec5" class="none">
            <h1>自我介紹</h1>
            <div></div>
        </section>`;
    return html;
};
