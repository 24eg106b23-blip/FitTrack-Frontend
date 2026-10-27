import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  userName = 'User';

  currentBMI = 0;
  bmiCategory = 'Not Calculated';
  currentWeight = 0;

  targetWeight = 65;
  waterGoal = 2.5;
  calorieGoal = 2200;
  weeklyWorkouts = 4;

  progress = 0;

  ngOnInit(): void {

    const savedUser = localStorage.getItem('fittrackUser');

    if (savedUser) {

      const user = JSON.parse(savedUser);

      this.userName = user.name;
      this.currentBMI = user.bmi;
      this.bmiCategory = user.category;
      this.currentWeight = user.weight;

      this.calculateProgress();
    }
  }

  calculateProgress(): void {

    const startingWeight = 75;

    if (this.currentWeight <= this.targetWeight) {
      this.progress = 100;
      return;
    }

    const totalGoal =
      startingWeight - this.targetWeight;

    const weightLost =
      startingWeight - this.currentWeight;

    this.progress = Math.round(
      (weightLost / totalGoal) * 100
    );

    if (this.progress < 0) {
      this.progress = 0;
    }

    if (this.progress > 100) {
      this.progress = 100;
    }
  }
}