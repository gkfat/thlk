/*
** Components
*/
// Header
class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <!-- Header -->
		<section id="header">
			<!-- 語言 -->
			<div class="lang">
				<a class="item" href="index.html">繁體中文</a>
				<span>｜</span>
				<a class="item" href="en/index.html">ENGLISH</a>
			</div>
			<!-- Menu -->
			<div class="navbar">
				<a class="logo" href="index.html">
					<img src="share/images/logo.png" />
				</a>
				<div class="hamburger">
					<span></span>
				</div>
				<ul class="menu">
					<!-- About -->
					<li class="menu-item">
						<a href="about.html">
							<img class="img" src="images/menu01.gif" />
							<img class="img img-hover" src="images/menu01a.gif" />
						</a>
					</li>
					<!-- Pro -->
					<li class="menu-item">
						<a href="pro.html">
							<img class="img" src="images/menu03.gif" />
							<img class="img img-hover" src="images/menu03a.gif" />
						</a>
						<!-- Pro sub menu -->
						<ul class="submenu">
							<li class="menu-item">
								<a href="pro01.html">
									<img class="subimg" src="images/sub01.gif" />
									<img class="subimg subimg-hover" src="images/sub01a.gif" />
								</a>
							</li>
							<li class="menu-item">
								<a href="pro02.html">
									<img class="subimg" src="images/sub02.gif" />
									<img class="subimg subimg-hover" src="images/sub02a.gif" />
								</a>
							</li>
							<li class="menu-item">
								<a href="pro03.html">
									<img class="subimg" src="images/sub03.gif" />
									<img class="subimg subimg-hover" src="images/sub03a.gif" />
								</a>
							</li>
							<li class="menu-item">
								<a href="pro04.html">
									<img class="subimg" src="images/sub04.gif" />
									<img class="subimg subimg-hover" src="images/sub04a.gif" />
								</a>
							</li>
							<li class="menu-item">
								<a href="pro05.html">
									<img class="subimg" src="images/sub05.gif" />
									<img class="subimg subimg-hover" src="images/sub05a.gif" />
								</a>
							</li>
						</ul>
					</li>
					<!-- Team -->
					<li class="menu-item">
						<a href="team.html">
							<img class="img" src="images/menu04.gif" />
							<img class="img img-hover" src="images/menu04a.gif" />
						</a>
					</li>
					<!-- Contact -->
					<li class="menu-item">
						<a href="contact.html">
							<img class="img" src="images/menu05.gif" />
							<img class="img img-hover" src="images/menu05a.gif" />
						</a>
					</li>
					<!-- Recruit -->
					<li class="menu-item">
						<a href="rec.html">
							<img class="img" src="images/menu06.gif" />
							<img class="img img-hover" src="images/menu06a.gif" />
						</a>
					</li>
				</ul>
				<!-- RWD Menu -->
				<ul class="menu-rwd">
					<!-- About -->
					<li class="menu-item">
						<a href="about.html">關於 THLK</a>
					</li>
					<!-- Pro -->
					<li class="menu-item">
						<a href="pro.html">專業領域</a>
						<!-- Pro sub menu -->
						<ul class="submenu">
							<li class="menu-item">
								<a href="pro01.html">金融暨資本市場</a>
							</li>
							<li class="menu-item">
								<a href="pro02.html">企業法律</a>
							</li>
							<li class="menu-item">
								<a href="pro03.html">訴訟與爭端解決</a>
							</li>
							<li class="menu-item">
								<a href="pro04.html">不動產</a>
							</li>
							<li class="menu-item">
								<a href="pro05.html">跨國投資</a>
							</li>
						</ul>
					</li>
					<!-- Team -->
					<li class="menu-item">
						<a href="team.html">專業團隊</a>
					</li>
					<!-- Contact -->
					<li class="menu-item">
						<a href="contact.html">聯絡我們</a>
					</li>
					<!-- Recruit -->
					<li class="menu-item">
						<a href="rec.html">人才招募</a>
					</li>
				</ul>
			</div>
		</section>   
    `;
  }
}
// Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
    <!-- Footer -->
		<section id="footer"></section>
    `;
  }
}
// Pro Side Menu
class ProSideMenu extends HTMLElement {
	pro_01 = `
		<div class="side-menu-scroll">
			<a class="side-menu-item" href="pro01_1.html">
				<img class="img" src="images/pro01_sub01.gif"/>
				<img class="img-hover" src="images/pro01_sub01b.gif"/>
			</a>
			<a class="side-menu-item" href="pro01_2.html">
				<img class="img" src="images/pro01_sub02.gif"/>
				<img class="img-hover" src="images/pro01_sub02b.gif"/>
			</a>
			<a class="side-menu-item" href="pro01_3.html">
				<img class="img" src="images/pro01_sub03.gif"/>
				<img class="img-hover" src="images/pro01_sub03b.gif"/>
			</a>
			<a class="side-menu-item" href="pro01_4.html">
				<img class="img" src="images/pro01_sub04.gif"/>
				<img class="img-hover" src="images/pro01_sub04b.gif"/>
			</a>
			<a class="side-menu-item" href="pro01_5.html">
				<img class="img" src="images/pro01_sub05.gif"/>
				<img class="img-hover" src="images/pro01_sub05b.gif"/>
			</a>
			<a class="side-menu-item" href="pro01_6.html">
				<img class="img" src="images/pro01_sub06.gif"/>
				<img class="img-hover" src="images/pro01_sub06b.gif"/>
			</a>
		</div>
	`;
	pro_02 = `
		<div class="side-menu-scroll">
			<a class="side-menu-item" href="pro02_1.html">
				<img class="img" src="images/pro02_sub01.gif"/>
				<img class="img-hover" src="images/pro02_sub01a.gif"/>
			</a>
			<a class="side-menu-item" href="pro02_2.html">
				<img class="img" src="images/pro02_sub02.gif"/>
				<img class="img-hover" src="images/pro02_sub02a.gif"/>
			</a>
			<a class="side-menu-item" href="pro02_3.html">
				<img class="img" src="images/pro02_sub03.gif"/>
				<img class="img-hover" src="images/pro02_sub03a.gif"/>
			</a>
			<a class="side-menu-item" href="pro02_4.html">
				<img class="img" src="images/pro02_sub04.gif"/>
				<img class="img-hover" src="images/pro02_sub04a.gif"/>
			</a>
		</div>
	`;
	pro_03 = `
		<div class="side-menu-scroll">
			<a class="side-menu-item" href="pro03_1.html">
				<img class="img" src="images/pro03_sub01.gif"/>
				<img class="img-hover" src="images/pro03_sub01a.gif"/>
			</a>
			<a class="side-menu-item" href="pro03_2.html">
				<img class="img" src="images/pro03_sub02.gif"/>
				<img class="img-hover" src="images/pro03_sub02a.gif"/>
			</a>
			<a class="side-menu-item" href="pro03_3.html">
				<img class="img" src="images/pro03_sub03.gif"/>
				<img class="img-hover" src="images/pro03_sub03a.gif"/>
			</a>
		</div>
	`;
	pro_04 = `
		<div class="side-menu-scroll">
			<a class="side-menu-item" href="pro04_1.html">
				<img class="img" src="images/pro04_sub01.gif"/>
				<img class="img-hover" src="images/pro04_sub01a.gif"/>
			</a>
			<a class="side-menu-item" href="pro04_2.html">
				<img class="img" src="images/pro04_sub02.gif"/>
				<img class="img-hover" src="images/pro04_sub02a.gif"/>
			</a>
		</div>
	`;
	pro_05 = `
		<div class="side-menu-scroll">
			<a class="side-menu-item" href="pro05_1.html">
				<img class="img" src="images/pro05_sub01.gif"/>
				<img class="img-hover" src="images/pro05_sub01a.gif"/>
			</a>
			<a class="side-menu-item" href="pro05_2.html">
				<img class="img" src="images/pro05_sub02.gif"/>
				<img class="img-hover" src="images/pro05_sub02a.gif"/>
			</a>
		</div>
	`;
	constructor( ) {
		super();
	}
	connectedCallback() {
		let target = this.getAttribute('data-target');
		let result = this.pro_01;

		switch ( target ) {
			case '1':
				result = this.pro_01;
				break;
			case '2':
				result = this.pro_02;
				break;
			case '3':
				result = this.pro_03;
				break;
			case '4':
				result = this.pro_04;
				break;
			case '5':
				result = this.pro_05;
				break;
		}
    this.innerHTML = result;
  }
}


// Define components
customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('pro-side-menu', ProSideMenu);


/*
** Functions
*/
let HamburgerToggle = () => {
	let isActive = $('.hamburger').hasClass('active');
	if ( isActive ) {
		$('.hamburger').removeClass('active');
		$('.menu-rwd').removeClass('active');
		$('html, body').css({
			'overflow-y': 'scroll',
			'scroll-behavior': 'auto'
		});
	} else {
		$('.hamburger').addClass('active');
		$('.menu-rwd').addClass('active');
		$('html, body').css('overflow-y', 'hidden');
	}
}


// 初始化
$(document).ready(() => {
	$('.hamburger').on('click', HamburgerToggle)
})