import FontFaceObserver from 'fontfaceobserver';

/* 「イスタンブール」は下記を無視します */
// 「Open Sans」（＝フォント）の読み込みを確認します
// （「Open Sans」を削除するには、「index.html」と、このオブザーバーの<link>タグを削除します）
const openSansObserver = new FontFaceObserver('Open Sans', {});

/* 「イスタンブール」は下記を無視します */
// 「Open Sans」がロードされたら、「Open Sans」を使用してフォントファミリを本文に追加します
const registerOpenSans = () => openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

export { registerOpenSans };
