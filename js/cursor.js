const el = `
    <div class="js-cursor">
      <div class="js-cursor__main"></div>
      <div class="js-cursor__option"></div>
    </div>`
document.body.insertAdjacentHTML('beforeend', el);


class Cursor {

    constructor() {
      const el = `
      <div class="js-cursor">
        <div class="js-cursor__main"></div>
        <div class="js-cursor__option"></div>
      </div>`
      document.body.insertAdjacentHTML('beforeend', el);
  
      this.wrap_el = document.querySelector('.js-cursor');
      this.main_el = document.querySelector('.js-cursor__main');
      this.option_el = document.querySelector('.js-cursor__option');
  
      this.position = {
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0
      }
      this.eventStatus = {
        click: false,
        hover: false
      }
  
    }
  
    init() {
      this.attachEvent();
      this.tween();
    }
  
    attachEvent() {
      //カーソルの位置を取得
      document.addEventListener('mousemove', (e) => {
        this.position.mouseX = e.clientX;
        this.position.mouseY = e.clientY;
        this.wrap_el.classList.add('is-moved');
      });
  
      //画面外判定
      document.body.addEventListener("mouseleave", () => {
        this.wrap_el.classList.add('is-outside');
      }, false);
      document.body.addEventListener("mouseenter", () => {
        this.wrap_el.classList.remove('is-outside');
      }, false);
  
      //クリック判定
      document.addEventListener('mousedown', (e) => {
        this.eventStatus.click = true;
      })
      document.addEventListener('mouseup', (e) => {
        this.eventStatus.click = false;
      })
  
      // aタグのホバー判定
      // 監視ターゲットの取得
      const body = document.body;
      // オブザーバーの作成
      const observer = new MutationObserver(records => {
        let link = document.querySelectorAll('.action');
        for (const target of link) {
          target.addEventListener('mouseenter', (e) => {
            this.eventStatus.hover = true;
            this.wrap_el.classList.add('is-hover');
          })
          target.addEventListener('mouseleave', (e) => {
            this.eventStatus.hover = false;
            this.wrap_el.classList.remove('is-hover');
          })
        }
      })
      // 監視の開始
      observer.observe(body, {
        childList: true
      })
  
    }
  
    tween() {
      TweenMax.to({}, .001, {
        repeat: -1,
        onRepeat: () => {
  
          //減速処理
          this.position.currentX += (this.position.mouseX - this.position.currentX) * 0.5;
          this.position.currentY += (this.position.mouseY - this.position.currentY) * 0.5;
  
          TweenMax.set(this.main_el,
            {
              css: {
                x: this.position.currentX - 5,
                y: this.position.currentY - 5
              }
            });
          TweenMax.to(this.option_el, 0.3,
            {
              css: {
                x: this.position.currentX - 20,
                y: this.position.currentY - 20,
                scale: this.scale(this.eventStatus)
              }
            });
        }
      });
    }
  
    scale(v) {
      if (v.hover == true && v.click == false) {
        return 1.6
      } else if (v.hover == false && v.click == true) {
        return 0.6
      } else if (v.hover == true && v.click == true) {
        return 0.6
      } else {
        return 1
      }
    }
  
  }
  
  let cursor = new Cursor();
  cursor.init();