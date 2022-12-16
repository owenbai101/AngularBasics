import { 
  Component,Input,EventEmitter,Output ,OnInit,
  OnChanges,DoCheck, AfterContentChecked,
  AfterViewChecked,AfterContentInit,AfterViewInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterViewChecked,AfterContentInit,AfterViewInit,OnDestroy {
  @Input('img') postImg =''
  @Output() imgSelected = new EventEmitter<string>()

  constructor(){
    console.log('constructor been called',this.postImg)
  }

  ngOnInit(){
    console.log('ngonInit been called',this.postImg)
  }
  ngDoCheck() {
    console.log('ngDoCheck called')
  }
  ngOnChanges() {
    console.log('ngOnChanges called')
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }
}
