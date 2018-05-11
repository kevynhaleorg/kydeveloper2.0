import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.scss']
})
export class PortfolioSingleComponent implements OnInit {

  post: Post = {
    id: "123",
    title: "Asterisk Deploy Automation",
    authorId: "1",
    date: "Aug. 27, 2017",
    featuredimage: "assets/images/buildings.png",
    likes: 5,
    views: 10,
    comments: 1,
    shares:0,
    icon: "http://freedesignfile.com/upload/2017/08/rocket-icon-vector.png",
    summary: "This is a short introduction  about Asterisk Desploy Automation and how it works.",
    content: `<img src="https://media.wired.com/photos/59322df52a990b06268a9042/master/w_2560,c_limit/uber.jpg"><p>Lorem ipsum dolor sit amet, populo tibique vituperatoribus mei id, vix te aliquip equidem dolores. Iudico nostro senserit ea pri. Ex labitur euismod aliquando quo, in quas noluisse vis. Eam cu civibus voluptatum cotidieque. Ex eos laboramus hendrerit scribentur, vim dicit dolore option cu. Ad case bonorum persecuti qui.
    </p><p>
    Ea sea brute putent, vim hinc aliquid platonem eu, conceptam percipitur at mel. In ignota cetero option sit, ludus persequeris vis ex, ut sed nihil cetero invidunt. Sit in reque accusam, ad dolorum invidunt has. Laudem adipisci mel et. An vis brute disputando. Qui ei nostrum consulatu interesset, modus iudicabit reprehendunt mel an. Ne nam dolor vocent torquatos.
    </p><p>
    Tota viderer ponderum est in, ut his viris evertitur, in quem veritus mel. Ius ex vero contentiones, at vivendo omnesque est. Quo malis legere concludaturque ad, id vix quis audire scriptorem, mazim iuvaret ne quo. Velit omittantur mel id, mea saperet laoreet an.
    </p><p>
    Cum quod delicatissimi id, id eum justo concludaturque, vim dolore tibique senserit ea. Ne ludus graece qui, eam tibique propriae in. Nam senserit intellegat et, ei indoctum accusamus eos. Et legere quaeque aliquam cum. Eu est singulis consequuntur, esse malis pro at. Ei purto accusam concludaturque eum, nam hinc reformidans no.
    </p><p>
    Per animal deserunt et, vim omnis harum simul eu, noster conceptam ut pri. Ea est tempor deleniti, per ad debitis consetetur posidonium. Cu blandit fastidii qui, ex aperiam reprimique quo. Dicta semper pro ea.
    </p>`
  }

  constructor() { }

  ngOnInit() {
  }

}
