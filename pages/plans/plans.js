// pages/plans/plans.js
const app = getApp()
var toshow = "<div class='card'>  <div class='card_left'>    <img src='h8fnwL1.png'/>  </div>  <div class='card_right'>    <h1>KILL  BILL:  VOL.  1</h1>    <div class='card_right__details'>      <ul>        <li>2003</li>        <li>111 min</li>        <li>Action</li>      </ul>      <div class='card_right__rating'>        <div class='card_right__rating__stars'>          <fieldset class='rating'>            <input id='star10' name='rating' type='radio' value='10'>/</input>            <label class='full' for='star10' title='10 stars'></label>            <input id='star9half' name='rating' type='radio' value='9 and a half'>/</input>            <label class='half' for='star9half' title='9.5 stars'></label>            <input id='star9' name='rating' type='radio' value='9'>/</input>            <label class='full' for='star9' title='9 stars'></label>            <input id='star8half' name='rating' type='radio' value='8 and a half'>/</input>            <label class='half' for='star8half' title='8.5 stars'></label>            <input id='star8' name='rating' type='radio' value='8'>/</input>            <label class='full' for='star8' title='8 stars'></label>            <input id='star7half' name='rating' type='radio' value='7 and a half'>/</input>            <label class='half' for='star7half' title='7.5 stars'></label>            <input id='star7' name='rating' type='radio' value='7'>/</input>            <label class='full' for='star7' title='7 stars'></label>            <input id='star6half' name='rating' type='radio' value='6 and a half'>/</input>            <label class='half' for='star6half' title='6.5 stars'></label>            <input id='star6' name='rating' type='radio' value='6'>/</input>            <label class='full' for='star6' title='6 star'></label>            <input id='star5half' name='rating' type='radio' value='5 and a half'>/</input>            <label class='half' for='star5half' title='5.5 stars'></label>            <input id='star5' name='rating' type='radio' value='5'>/</input>            <label class='full' for='star5' title='5 stars'></label>            <input id='star4half' name='rating' type='radio' value='4 and a half'>/</input>            <label class='half' for='star4half' title='4.5 stars'></label>            <input id='star4' name='rating' type='radio' value='4'>/</input>            <label class='full' for='star4' title='4 stars'></label>            <input id='star3half' name='rating' type='radio' value='3 and a half'>/</input>            <label class='half' for='star3half' title='3.5 stars'></label>            <input id='star3' name='rating' type='radio' value='3'>/</input>            <label class='full' for='star3' title='3 stars'></label>            <input id='star2half' name='rating' type='radio' value='2 and a half'>/</input>            <label class='half' for='star2half' title='2.5 stars'></label>            <input id='star2' name='rating' type='radio' value='2'>/</input>            <label class='full' for='star2' title='2 stars'></label>            <input id='star1half' name='rating' type='radio' value='1 and a half'>/</input>            <label class='half' for='star1half' title='1.5 stars'></label>            <input id='star1' name='rating' type='radio' value='1'>/</input>            <label class='full' for='star1' title='1 star'></label>            <input id='starhalf' name='rating' type='radio' value='half'>/</input>            <label class='half' for='starhalf' title='0.5 stars'></label>          </fieldset>        </div>      </div>      <div class='card_right__review'>        <p>The lead character, called 'The Bride,' was a member <br/> of the Deadly Viper Assassination Squad, led by her <br/> lover 'Bill.' Upon realizing she was pregnant with Bill's<br/> child, 'The Bride' decided to escape her life as a killer.<br/> She fled to Texas, met a young man, who, on the day<br/> of their wedding rehearsal was gunned down by....</p>        <a href='http://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl' target='_blank'>Read more</a>      </div>      <div class='card_right__button'>        <a href='https://www.youtube.com/watch?v=ot6C1ZKyiME' target='_blank'>WATCH TRAILER</a>      </div>    </div>  </div></div>"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //article将用来存储towxml数据
    article: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _ts = this;

    /*
    //将markdown内容转换为towxml数据，交将当前页面对象传入以创建默认事件对象
    let articleData = app.towxml.toJson(toshow, 'html', _ts);
    //let articleData = app.towxml.html2wxml('<h1>test</h1>');
    //自定义事件，格式为`event_`+`绑定类型`+`_`+`事件类型`
    //例如`bind:touchstart`则为：
    this['event_bind_touchstart'] = (event) => {
      console.log(event.target.dataset.name);     // 打印出"button"
    };

    //设置文章数据，并清除页面loading
    _ts.setData({
      article: articleData,
      isloading: false
    });
    */
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})