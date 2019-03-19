# vue-cli3-unit
1. 環境  
  node:v8.11.1 
  npm:4.0.5 
  vue:3.0.1 
2. ページ構成  
  home / 
  works /works 
  about /about 
  contact  /contact 
3.  
  app.vue 
  main.js 
  router.js 
  store.js 
  assets 



4. transition 
  loading 
  page transition store muttation 
  main-contents transition 

5. scroll-bar 
6. carousel unit 
    navigation 
    pagenations
    auto slide 

7. svg 
    link animation unit 

8. link unit 
    animation 
    svg arrow 
    svg circle 

9. section component 
   2col section 
   altanative image 
10. works component
  transition text
  transition image



## 常時垂直スクロールバーを表示させる。
<style> 
    html{ overflow-y: scroll; } 
</style> 

## 垂直スクロールバーのスタイリングを変更する。
  スクロールバーの横のサイズ 
  <style> 
    ::-webkit-scrollbar { 
        width: 16px; 
        // width: 6px; 
    } 
  </style> 
 
  スクロールバーの軌道を非表にする 
  <style> 
    ::-webkit-scrollbar-track { 
      // background: transparent; 
      border-radius: 10px; 
      box-shadow: inset 0 0 6px rgba(33, 33, 33, .1); 
      display: none ; 
    } 
  </style> 

  クロールバーの動く部分を透明度0.3のグレイにする。 
  <style> 
    ::-webkit-scrollbar-thumb { 
      background-color: rgba(105, 105, 105, 0.5); 
      border-radius: 30px; 
      // box-shadow:0 0 0 1px rgba(255, 255, 255, .3); 
    } 
  </style> 

## 垂直スクロールバーのスタイリングを変更する。
<template> 
  <div class="Content"> 
      <div class="main"> 
        <section > 
            垂直スクロールバーの下まで表示される領域 
        </section> 
      </div> 
  </div> 
</template> 
## 親要素はwidth:100%、子要素はwidth:100vwを指定する。
<style> 
  .Content{ 
      position: relative; 
      width: 100%; 
      height: auto; 
  } 
  .main{ 
    //横スクロール処理 
    width: auto; 
    min-width: 100vw; 
  }  
</style> 


# vue-cli3-unit 更新
Vue-cli3 でプロジェクトを作成し、そのプロジェクトを GitHub に Push するまでの方法  

## ローカルにプロジェクトを作成する。
1. vue create プロジェクト名　　
2. cd プロジェクト名
3. npm run serve
4. ブラウザを開き「http://localhost:8080」にアクセス

## GitHub Pageに公開する設定をする。
1. プロジェクトディレクトリにvue.config.jsを新規に作成する。
2. module.exports = {  　
    outputDir: 'docs',  
    assetsDir: './',  
    publicPath: './'  
   }  
   設定を追加する。  
3. router.jsの設定を変更する  
4. // mode: 'history',
   ヒストリーモードからハッシュモードに変更する  
5.  npm run build

## GitHub リポジトリの作成
1. GitHub ログイン後のトップページから、Repositories の New ボタンをクリックします。
2. Create a new repository の画面に遷移するので、リポジトリ名、ライセンス等を入力。Initialize this repository with a READMEはチェックせず画面下のほうにある Create repository ボタンをクリックします。
 
## プロジェクトを GitHub に Push する
1. git add -A
2. git commit -m "first commit"
3. git remote add origin https://github.com/hiramatsuYoshiaki/プロジェクト名
4. git push -u origin master

# vue-cli3-unit
現在のブランチから派生ブランチを作成してGitHubへPushする。  

1. git branch new-branch
2. git checkout new-branch
3. git branch
   * new-branch
     master
4. git add -A
5. git commit -m 'new branch commit'
6. git push --set-upstream origin new-branch
   (もしくは、　git push -u origin new-branch)

# vue-cli3-unit
リモートリポジトリをcloneしてローカルで開発をして、GitHubへpushする。  

## GitHubリポジトリをcloneしてローカルプロジェクト作る
1. リモートリポジトリをcloneする。 
    git clone https://github.com/hiramatsuYoshiaki/vue-cli3-app.git  
2. インストールする  
    npm install  
3. サーバーを立ち上げて確認    
   npm run serve
4. ローカルサーバーへアクセス 
   http://localhost:8080/で確認する。

## ローカルプロジェクトをGitHubへpushする。
1. 現在のブランチを確認する。
   git branch  
   * master  
2. masterから新しいbranchを作る  
　　git branch new-branch   
3. 新しいbranchに移動し開発を行う。  
   git checkout new-branch  
4. cloneしたリポジトリから別のリモートリポジトリのURLを変更する場合  
    git remote -vでリモートリポジトリを確認する  
    origin  https://github.com/hiramatsuYoshiaki/vue-cli3-unit.git (fetch)  
    origin  https://github.com/hiramatsuYoshiaki/vue-cli3-unit.git (push)  
    remote rm originで現在のリモートリポジトリを削除する  
    git remote add originで新しいリモートリポジトリを追加する   
    git remote add origin https://github.com/hiramatsuYoshiaki/vue-cli3-unit-alprime.git
5. コミットしてGitHubにpushする  
   git add　-A  
   git commit -m "コメント"  
   git push -u origin new-branch  
   (二回目からは、 git push)  

## localでいままで作業していたbranchを削除する
  1.これで削除できます。これはしなくてもいいですが、開発が進んでいくとbranchが増えてbranch一覧がごちゃごちゃしてくるのでやったほうがいいです。  
  git branch -d new-branch  

## 他の人の開発分を取り込む
1. masterに他の人が追加した分を自分のところに取り込みます。 
  git pull origin master  
  
    
     



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# vueapp0-cli3-scss

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

serve -s dist

ディプロイ（さくらインターネット）  
tourdehdr.sakura.ne.jp/web3/vuecli3/  
1.<base href="/">の追加  
npm run build後に生成されたpublic/index.を編集  
<!DOCTYPE html>  
<html lang="jp">  
  <head>  
    <base href="/"> //＜－－－－－追加する  
    <meta charset="utf-8">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">  
    <meta name="viewport" content="width=device-width,initial-scale=1.0">  
    <link rel="icon" href="<%= BASE_URL %>favicon.ico">  
    <title>vueapp0-cli3-scss</title>  
  </head>  
  <body>  
    <noscript>  
      <strong>We're sorry but vueapp0-cli3-scss doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>  
    </noscript>  
    <div id="app"></div>   
  </body>  
</html>  
2.vue.config.jsの追加  
プロジェクトルート（package.jsonのある階層）に、新しくvue.config.jsを作成し、下記を追加する。  
module.exports = {  
    baseUrl:'./web3/vuecli3/'  
}  
３．npm run buildを実行し、dist/index.htmlを確認する。  
<!DOCTYPE html>  
<html lang=en>  
<head>  
<base href=/ >　//<--追加  
<meta charset=utf-8>  
<meta http-equiv=X-UA-Compatible content="IE=edge">  
<meta name=viewport content="width=device-width,initial-scale=1">  
<link rel=icon href=web3/vuecli3/favicon.ico>　//<--追加　web3/vuecli3/  
<title>vueapp0-cli3-scss</title>  
<link href=web3/vuecli3/js/about.2d341050.js rel=prefetch>//<--追加　web3/vuecli3/  
<link href=web3/vuecli3/css/app.c750f8b0.css rel=preload as=style>//<--追加　web3/vuecli3/  
<link href=web3/vuecli3/js/app.d1faed55.js rel=preload as=script>//<--追加　web3/vuecli3/  
<link href=web3/vuecli3/js/chunk-vendors.19368321.js rel=preload as=script>//<--追加　web3/vuecli3/  
<link href=web3/vuecli3/css/app.c750f8b0.css rel=stylesheet>//<--追加　web3/vuecli3/  
</head>  
<body>  
<noscript><strong>We're sorry but vueapp0-cli3-scss doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>  
<div id=app></div>  
<script src=web3/vuecli3/js/chunk-vendors.19368321.js></script>//<--追加　web3/vuecli3/  
<script src=web3/vuecli3/js/app.d1faed55.js></script>//<--追加　web3/vuecli3/  
</body>  
</html>  

4.ftpでアップロードする。  

videoタグでの自動再生について注意  
注意点  
必ずmuteを付ける、そうでないと、初期ロードじに再生しない場合。   
Safari for iOS 10とChrome for Android 53では、  
「音声を鳴らさないという条件で」ページ読み込み後の  
ビデオの自動再生が可能となります。  
Chromeでは、video要素にmuted属性を指定している場合に限り、  
autoplay属性の追加で自動再生が可能になります。  
一方、Safariでは、muted属性が指定されている場合に加えて、  
再生対象となるビデオのファイルにオーディオトラックが  
含まれていない場合も(この場合はmuted属性の指定がなくても)、  
autoplay属性による自動再生が可能となります。  



# vue-cli3-unit  

## Project setup  
```
npm install  
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
