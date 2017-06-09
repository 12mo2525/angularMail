import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  toppings:number=0;

  //--相手と自分
  myname:string;
  yourname:string;

  //--options
  Cc:string;
  settime:string;
  setplace:string;
  timeandplace:boolean=false;
  safeMsg : SafeHtml;
  timeandplaces:[boolean]=[false,false,false,true,true,true,true];
  messages:[string] = ["<p>本日は短い時間でしたがお話を聞くことが出来て光栄でした。</br>また、お目にかかれることを楽しみにいたしております。</br>今後とも、どうぞよろしくお願いいたします。</p>","早速、ご対応いただき誠にありがとうございます。</br>今後も相変わらぬご交諠を賜りますよう、よろしくお願い申し上げます。</br>メールにて恐縮ではございますが、取り急ぎ、お礼申し上げます。","お誘い頂き、誠にありがとうございます。</br>是非、参加したいところなのですが、既に別の予定が入っておりまして、残念ながら欠席せざる得ない状況です。</br>せっかくご招待をいただきながら、本当に申し訳なく存じますが、何卒、ご容赦くださいますようお願いいたします。","お話を聞いて頂ける機会を頂けたこと、誠に感謝致します。</br>打ち合わせの時間について先方に打診しましたところ以下の日時が都合がよいとのことですがいかがいたしましょうか。</br>この日程にて差し支えなければ先方にその旨連絡いたしますのでご検討をお願いいたします。</br>取り急ぎ、メールにてご連絡いたします。"];



  constructor(public navCtrl: NavController,public sanitizer:DomSanitizer) {
    this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(this.messages[0]);
  }

  selectMessage(tmp:number):SafeHtml{
    this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(this.messages[tmp]);
    this.timeandplace = this.timeandplaces[tmp];
    return this.safeMsg;
  }


}
