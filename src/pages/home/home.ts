import { Component} from '@angular/core';
import { NavController,ToastController} from 'ionic-angular';
import { DomSanitizer, SafeHtml} from '@angular/platform-browser';
import * as Clipboard from 'clipboard/dist/clipboard.min.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ai_doc:string =` ※弊社は、AI活用の可能性を探るために、メールでの文章の一部を、AIに代筆してもらっております。
    　  至らない点もあるとは存じますが、お許しください。`;
  toppings:number=0;
  txtToCopy:string;
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
    messages2:[string] = ["本日は短い時間でしたがお話を聞くことが出来て光栄でした。\nまた、お目にかかれることを楽しみにいたしております。\n今後とも、どうぞよろしくお願いいたします。","早速、ご対応いただき誠にありがとうございます。\n今後も相変わらぬご交諠を賜りますよう、よろしくお願い申し上げます。\nメールにて恐縮ではございますが、取り急ぎ、お礼申し上げます。","お誘い頂き、誠にありがとうございます。\n是非、参加したいところなのですが、既に別の予定が入っておりまして、残念ながら欠席せざる得ない状況です。\nせっかくご招待をいただきながら、本当に申し訳なく存じますが、何卒、ご容赦くださいますようお願いいたします。","お話を聞いて頂ける機会を頂けたこと、誠に感謝致します。\n打ち合わせの時間について先方に打診しましたところ以下の日時が都合がよいとのことですがいかがいたしましょうか。\nこの日程にて差し支えなければ先方にその旨連絡いたしますのでご検討をお願いいたします。\n取り急ぎ、メールにてご連絡いたします。"];
  clipboard:Clipboard;



  constructor(public navCtrl: NavController,public sanitizer:DomSanitizer,public toastCtrl: ToastController) {
    this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(this.messages[0]);
    this.clipboard = new Clipboard('#cpyBtn');
    this.clipboard.on('success', () => this.showMsg(toastCtrl));
    this.txtToCopy = "fuck omae shit";
  }

  selectMessage(tmp:number):SafeHtml{
    this.txtToCopy = this.yourname+"様、お世話になっております。"+"\n"+this.myname+"です。"+"\n"+this.messages2[tmp]+"\n\n"+this.ai_doc;
    this.safeMsg = this.sanitizer.bypassSecurityTrustHtml(this.messages[tmp]);
    this.timeandplace = this.timeandplaces[tmp];
    return this.safeMsg;
  }
  showMsg(toastCtrl: ToastController) {
        let toast = toastCtrl.create({
            message: 'Its copied to clipboard',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
  // I log Clipboard "copy" errors.
     public logError( error: Error ) : void {

         console.group( "Clipboard Error" );
         console.error( error );
         console.groupEnd();

     }


     // I log Clipboard "copy" successes.
     public logSuccess( value: string ) : void {

         console.group( "Clipboard Success" );
         console.log( value );
         console.groupEnd();

     }

}
