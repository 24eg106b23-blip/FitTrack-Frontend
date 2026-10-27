import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile implements OnInit {

  name = '';
  age: number | null = null;
  gender = '';
  height: number | null = null;
  weight: number | null = null;
  bmi: number | null = null;
  category = '';

  targetWeight: number | null = 65;
  fitnessGoal = 'General Fitness';

  editMode = false;
  message = '';

  ngOnInit(): void {

    const savedUser = localStorage.getItem('fittrackUser');

    if (savedUser) {
      const user = JSON.parse(savedUser);

      this.name = user.name || '';
      this.age = user.age || null;
      this.gender = user.gender || '';
      this.height = user.height || null;
      this.weight = user.weight || null;
      this.bmi = user.bmi || null;
      this.category = user.category || '';
    }

    const savedProfile = localStorage.getItem('fittrackProfile');

    if (savedProfile) {
      const profile = JSON.parse(savedProfile);

      this.targetWeight = profile.targetWeight || 65;
      this.fitnessGoal = profile.fitnessGoal || 'General Fitness';
    }
  }

  enableEdit(): void {
    this.editMode = true;
    this.message = '';
  }

  saveProfile(): void {

    const profile = {
      targetWeight: this.targetWeight,
      fitnessGoal: this.fitnessGoal
    };

    localStorage.setItem(
      'fittrackProfile',
      JSON.stringify(profile)
    );

    this.editMode = false;
    this.message = 'Profile updated successfully!';
  }
}