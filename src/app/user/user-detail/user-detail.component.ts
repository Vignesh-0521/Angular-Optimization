import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent implements OnInit {
  userDetails:{
    id:number;
    name:string;
    email:string;
    address:string;
    role:string;
  } | null=null;

  userId!: number;

  private users=[
    { 
      'id':1,
      'name': "Vignesh",
      'email':"vignesh@gmail.com",
      'address': "East Godavari",
      'role':"Software Engineer Trainee"
    },
    {
      'id':2,
      'name': "Kushwanth",
      'email':"Kushwanth@gmail.com",
      'address': "Ananthapur",
      'role':"Analog Trainee"
    },
    {
      'id':3,
      'name': "Naveen",
      'email':"naveen@gmail.com",
      'address': "Ananthapur",
      'role':"Software Engineer Trainee"
    }
  ]

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));   //gets the id from the url and stores in userId
  
    this.userDetails = this.users.find(     //checks in the users, if matches displays user details else not found
      (user)=>user.id === this.userId
    ) || null;
  }
  goBack() {
    this.location.back(); // navigating back to the previous page
  }
}
