import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.html'
})
export class HomeComponent implements OnInit {

  public invalidNome:string[] = [];
  public fields = {
    fieldNome : ''
  }
  public styleElements = {
      borderColor : null
  }

  constructor() { }

  ngOnInit() {
  }

  validarNome(){ 
    this.invalidNome = [];
    if(this.fields.fieldNome.length < 4){
      this.styleElements.borderColor = 'red';
      this.invalidNome.push('O nome deve conter pelo menos 4 caracteres');
    }
    if(this.fields.fieldNome.search('1') != -1){
      this.invalidNome.push('O nome não deve conter números');
    }
  }
}
