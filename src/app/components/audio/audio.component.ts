import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, ViewChild} from '@angular/core';
import {AudioCounterService} from './audio-counter.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Recorder, TextBundler} from '../../models/Recorder';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit, OnDestroy, AfterViewInit{
  tracer$: Observable<number>;

  @ViewChild('player') player: ElementRef;
  @ViewChild('container') container: ElementRef;
  @ViewChild('fei') fei;

  recorders;

  mockRecords = [
    {
      "time": "0:00",
      "text": "I am always drawn back to places where I have lived, the houses and their neighborhoods. For instance, there is a _brownstone_ in the _East Seventies_ where, during the early years of the war, I had my first New York apartment. "
    },
    {
      "time": "0:14",
      "text": "It was one room crowded with attic furniture(古老的家具), a sofa and fat chairs upholstered in that itchy, particular red velvet that one associates with hot days on a train. The walls were stucco(灰泥), and a color rather like tobacco-spit. "
    },
    {
      "time": "0:30",
      "text": "The single window looked out on a _fire escape_. Even so it still was a place of my own, the first, and my books were there, and jars of pencils to sharpen, everything I needed, so I felt, to become the writer I wanted to be."
    },
    {
      "time": "0:45",
      "text": "It never occurred to me in those days to write about Holly Golightly, and probably it would not now except for a conversation I had with Joe Bell that set the whole memory of her _in motion again_."
    },
    {
      "time": "1:01",
      "text": "Holly Golightly had been a tenant in the old brownstone; she'd occupied(占据) the apartment below mine. As for Joe Bell, he ran a bar around the corner on Lexington Avenue; he still does. Both Holly and I used to go there six, seven times a day, not for a drink, not always, but to make telephone calls. "
    },
    {
      "time": "1:21",
      "text": "During the war a private telephone was hard to come by(很难得到). Moreover, Joe Bell was good about taking messages, which in Holly's case was no small favor, for she had a tremendous(巨多) many."
    },
    {
      "time": "1:32",
      "text": "Of course, this was a long time ago, and until last week I hadn't seen Joe Bell in several years. Occasionally I'd stopped by his bar when passing through(路过) the neighborhood; but actually, we'd never been strong friends except in as much as we were both friends of Holly Golightly."
    },
    {
      "time": "1:51",
      "text": "And so, when, late last Tuesday afternoon, the telephone rang and I heard \"Joe Bell here,\" I knew it must be about Holly. He didn't say so, just: \"Can you rattle right over here? It's important,\" and there was a croak(嘶哑) of excitement in his froggy voice."
    },
    {
      "time": "2:09",
      "text": "I took a taxi in a downpour(大雨) of October rain, and on my way, I even thought she might be there, that I would see Holly again."
    },
    {
      "time": "2:18",
      "text": "But there was no one on the premises except the proprietor(业主). Joe Bell's is a quiet place compared to most Lexington Avenue bars. It boasts neither neon(霓虹灯) nor television. Behind the bar, in a niche surrounded by photographs of ice-hockey stars, there is always a large bowl of fresh flowers that Joe Bell himself arranges with matronly(保姆) care. That is what he was doing when I came in."
    },
    {
      "time": "2:44",
      "text": "Naturally,"
    },
    {
      "time": "2:56",
      "text": "\"You heard from Holly?\"\n\"I can't say exactly heard from her. I mean, I don't know. That's why I want your opinion. Let me build you a drink. Something new. They call it a White Angel,\" he said, mixing one- half vodka, one-half gin, no vermouth. "
    },
    {
      "time": "3:12",
      "text": "While I drank the result, Joe Bell stood sucking on a Tums(胃酸药) and turning over in his mind what he had to tell me. And then: \"You recall a certain Mr. I.Y. Yunioshi? A gentleman from Japan.\"\n\"From California,\" I said, recalling Mr. Yunioshi perfectly. He's a photographer on one of the picture magazines, and when I knew him he lived in the studio apartment on the top floor of the brownstone."
    },
    {
      "time": "3:39",
      "text": "\"Don't go mixing me up. All I'm asking, you know who I mean? Okay. So last night who comes waltzing(漫步) in here but this selfsame Mr. I. Y. Yunioshi. I haven't seen him, I guess it's over two years. And where do you think he's been those two years?\" \n\"Africa.\""
    },
    {
      "time": "3:57",
      "text": "Joe Bell’s eyes narrowed. \"So how did you know?\"\n\"Read it in Winchell.\" Which I had, as a matter of fact."
    },
    {
      "time": "4:07",
      "text": "He rang open his _cash register_, and produced a _manila envelope_. \"Well, see did you read this in Winchell.\""
    },
    {
      "time": "4:14",
      "text": "In the envelope were three photographs, more or less the same, though taken from different angles: a tall delicate Negro man(黑人) wearing a calico skirt, displaying in his hands an odd wood **sculpture**(雕塑), an elongated carving of a head, a girl's, her hair sleek and short as a young man's, her smooth wood eyes too large and tilted in the tapering face. On a glance it resembled most primitive carving; and then it didn't, for here was the spit- image(一模一样) of Holly Golightly."
    },
    {
      "time": "4:54",
      "text": "\"Now what do you make of that?\" said Joe Bell. \n\"It looks like her.\"\n\"Listen, boy,\" and he slapped his hand on the bar, \"it is her. Sure as I'm a man fit to wear britches. The little _Jap_ knew it was her the minute he saw her.\""
    },
    {
      "time": "5:09",
      "text": "\"He saw her? In Africa?\"\n\"Well. Just the statue there. But it comes to the same thing. Read the facts for yourself,\" he said, turning over one of the photographs. On the reverse was written: Wood Carving, S Tribe, Tococul, East Anglia, Christmas Day, 1956."
    },
    {
      "time": "5:34",
      "text": "The story was this: On Christmas day Mr. Yunioshi had passed with his camera through Tococul, a village in the tangles of nowhere and of no interest. He'd decided to move on when he saw suddenly a Negro squatting(蹲着) in a doorway carving(雕刻) monkeys on a walking stick. Mr. Yunioshi was **impressed**(印象深刻) and asked to see more of his work. "
    },
    {
      "time": "5:57",
      "text": "Whereupon he was shown the carving of the girl's head. But when he offered to buy it the Negro cupped his private parts(裆区) in his hand (apparently a tender **gesture**(手势), comparable to tapping one's heart) and said “no”. "
    },
    {
      "time": "6:12",
      "text": "A pound of salt and ten dollars, a wristwatch and two pounds of salt and twenty dollars, nothing swayed him. Mr. Yunioshi was in all events **determined**(确定) to learn how the carving came to be made. "
    },
    {
      "time": "6:25",
      "text": "It cost him his salt and his watch, but it would seem that in the spring of that year a party of three white persons had appeared out of the brush riding on horseback. "
    },
    {
      "time": "6:36",
      "text": "A young woman and two men. The men, both red-eyed with fever(发烧), were forced for several weeks to stay shut and shivering in an **isolated**(孤立) hut, while the young woman, having presently taken a fancy(喜欢) to the wood-carver, shared the woodcarver's mat(地毯)."
    },
    {
      "time": "6:53",
      "text": "I don't credit that part,"
    },
    {
      "time": "7:03",
      "text": "\"And then?\"\n\"Then nothing,\" he shrugged. \"By and by she went like she come, rode away on a horse.\""
    },
    {
      "time": "7:10",
      "text": "Now the Jap, he asked about her up and down the country. But nobody else had ever seen her.\" Then it was as if he could feel my own sense of letdown transmitting itself to him, and he wanted no part of it. "
    },
    {
      "time": "7:24",
      "text": "\"One thing you got to admit, it's the only definite news in I don't know how many years\" \n\"She's probably never set foot in Africa,\" I said, believing it; and yet I could see her there, it was somewhere she would have gone. "
    },
    {
      "time": "7:42",
      "text": "\"You know so much, where is she?\"\n\"Dead. Or in a crazy house(精神病医院). Or married. I think she's married and quieted down and maybe right in this very city.\""
    },
    {
      "time": "7:54",
      "text": "No”, he said. “If she was in this city I'd have seen her. You take a man that likes to walk, a man like me, a man's been walking in the streets going on ten or twelve years, and all those years he's got his eye out for one person, and nobody's ever her, don't it stand to reason she's not there? I see pieces of her all the time, a flat little bottom, any skinny girl that walks fast and straight -- "
    },
    {
      "time": "8:25",
      "text": "\"It's just that I didn't know you'd been in love with her. Not like that.\"\nI was sorry I'd said it; it **disconcerted**(搅乱) him. He scooped up the photographs and put them back in their envelope. I looked at my watch. I hadn't any place to go, but I thought it was better to leave."
    },
    {
      "time": "8:43",
      "text": "Outside the rain had stopped, so I turned the corner and walked along the street to where the brownstone stands. Midway in the block, it has been sleeked-up(装修) since my day; a smart(帅) black door replaced the old frosted glass, and gray **elegant**(优雅) shutters frame the windows. "
    },
    {
      "time": "9:05",
      "text": "No one I remember still lives there except Madame Sapphia Spanella, a husky(壮实的) coloratura(花腔女高音) who every afternoon went roller-skating in Central Park. I know she's still there because I went up the steps and looked at the mailboxes(邮箱). It was one of these mailboxes that had first made me aware of Holly Golightly."
    },
    {
      "time": "9:29",
      "text": "I'd been living in the house about a week when I noticed that the mailbox belonging to Apt. 2 had a name-slot fitted with a curious card. It read: Miss Holiday Golightly; and, underneath, in the corner, Traveling. It nagged me like a tune: Miss Holiday Golightly, Traveling."
    },
    {
      "time": "9:52",
      "text": "One night, it was long past twelve, I woke up at the sound of Mr. Yunioshi calling down the stairs. His voice fell through the whole house, \"Miss Golightly! I must protest!\""
    },
    {
      "time": "10:08",
      "text": "The voice that came back, was silly-young and self-amused. \"Oh, darling, I am sorry. I lost the goddamn key.\""
    },
    {
      "time": "10:18",
      "text": "\"You cannot go on ringing my bell. You must please, please have yourself a key made.\"\n\"But I lose them all. Oh, don't be angry, you dear little man: I won't do it again. And if you promise not to be angry\" -- her voice was coming nearer, she was climbing the stairs -- \"I might let you take those pictures we mentioned.\""
    },
    {
      "time": "10:42",
      "text": "By now I'd left my bed and opened the door an inch. I could hear Mr. Yunioshi's silence: hear, because it was accompanied by an audible change of breath."
    },
    {
      "time": "10:54",
      "text": "\"When?\" he said.\nThe girl laughed. \"Sometime,\" she answered, slurring the word. \n\"Any time,\" he said, and closed his door."
    },
    {
      "time": "11:11",
      "text": "I went out into the hall and leaned over the banister(栏杆), just enough to see without being seen. She reached the landing, and the ragbag colors of her boy's hair, tawny streaks(黄褐色), strands of albino-blond(超黄) and yellow, caught the hall light. "
    },
    {
      "time": "11:30",
      "text": "It was a warm evening, and she wore a slim cool black dress, black sandals, a pearl choker(珍珠项链). For all her chic(优美的) thinness, she had an almost breakfast-cereal air of health, a soap and lemon cleanness, a rough pink darkening in the cheeks. Her mouth was large, her nose upturned. A pair of dark glasses blotted out her eyes. I thought her anywhere between sixteen and thirty; as it turned out, she was shy two months of her nineteenth birthday."
    },
    {
      "time": "12:04",
      "text": "She was not alone. There was a man following behind her. He was short and vast, sun-lamped and pomaded, with a red carnation withering in the lapel. When they reached her door she rummaged her purse in search of a key, and took no notice of the fact that his thick lips were nuzzling(爱抚) the nape of her neck(脖颈儿). At last, though, finding the key and opening her door, she turned to him cordially(亲切地): "
    },
    {
      "time": "12:33",
      "text": "\"Bless you, darling -- you were sweet to see me home.\"\n\"Hey, baby!\"\n\"Yes, Harry?\"\n\"Harry was the other guy. I'm Sid. I’m Sid Arbuck. You like me.\" \n\"I worship you, Mr. Arbuck. But good night, Mr. Arbuck.\"\nMr. Arbuck stared with disbelief as the door shut firmly. "
    },
    {
      "time": "12:54",
      "text": "\"Hey, baby, let me in baby. You like me.\n\"I'm a liked guy. Didn't I pick up the **check**(买单), five people, your friends, I never seen them before? Don't that give me the right you should like me?\""
    },
    {
      "time": "13:06",
      "text": "He tapped on the door gently, then louder; finally he took several steps back, as though he meant to charge it. Instead, he plunged down the stairs, slamming a fist against the wall. Just as he reached the bottom, the door of the girl's apartment opened and she poked out her head. "
    },
    {
      "time": "13:25",
      "text": "\"Oh, Mr. Arbuck ... \"\nHe turned, a smile of relief oiling his face: she'd only been teasing.\n\"The next time a girl wants a little _powder-room change_,\" she called, not teasing at all, \"take my advice, darling: don't give her twenty-cents!\""
    }
  ].map(o => {
    return new TextBundler(o);
  });

  scrollTo: number = 0;

  constructor(private audioCounterServices: AudioCounterService) {

  }

  ngOnInit() {

    // mock
    // this.recorders = new Recorder([
    //   new TextBundler({time: '0:00', text: 'hello'}),
    //   new TextBundler({time: '00:34', text: 'Nice to meet you'}),
    //   new TextBundler({time: '0:3', text: 'oh nice!'}),
    //   new TextBundler({time: '0:5', text: 'can we talk'}),
    //   new TextBundler({time: '0:13', text: 'matt is awesome guy'}),
    //   new TextBundler({time: '0:35', text: 'does he married?'}),
    //   new TextBundler({time: '0:23', text: 'who knows'}),
    //   new TextBundler({time: '0:15', text: 'what happen'})
    // ]);
    this.recorders = new Recorder(this.mockRecords);

  }

  ngOnDestroy(): void {
    this.audioCounterServices.stopTracing();
  }

  ngAfterViewInit(): void {

    const hashingRecorders = this.recorders.hash();
    this.tracer$ = this.audioCounterServices.counter$
      .map(seccond => Math.floor(seccond))
      .distinctUntilChanged()
      .do(second => {
        // 激活的文本段
        if (hashingRecorders[second]) {
          console.log(hashingRecorders[second]);
          this.scrollTo = second;
          // console.log(document.getElementById(second + ''));
          try {
            document.getElementById(second + '').scrollIntoView({block: 'center', behavior: 'smooth'});
          } catch (err) {
            document.getElementById(second + '').scrollIntoView();
          }
        }
      });
    this.audioCounterServices.startTracing(this.player.nativeElement, 700);
    this.tracer$.subscribe(console.log);
  }

}
