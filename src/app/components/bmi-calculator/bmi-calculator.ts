import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../../services/fitness';

@Component({
  selector: 'app-bmi-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bmi-calculator.html',
  styleUrl: './bmi-calculator.css'
})
export class BmiCalculator {

  name = '';
  age: number | null = null;
  gender = '';
  height: number | null = null;
  weight: number | null = null;

  result: any = null;
  errorMessage = '';
  loading = false;

  constructor(
    private fitnessService: FitnessService
  ) {}

  calculateBMI(): void {

    this.errorMessage = '';

    if (
      !this.name ||
      !this.age ||
      !this.gender ||
      !this.height ||
      !this.weight
    ) {
      this.errorMessage = 'Please enter all details.';
      return;
    }

    // Calculate BMI immediately in Angular
    const heightInMeters = Number(this.height) / 100;

    const bmi =
      Number(this.weight) /
      (heightInMeters * heightInMeters);

    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }

    // Display result immediately
    this.result = {
      name: this.name,
      age: this.age,
      gender: this.gender,
      height: Number(this.height),
      weight: Number(this.weight),
      bmi: Number(bmi.toFixed(2)),
      category: category
    };

    // Save for Dashboard/Profile
    localStorage.setItem(
      'fittrackUser',
      JSON.stringify(this.result)
    );

    // Never leave button stuck
    this.loading = false;

    // Send same information to Node backend
    this.fitnessService
      .calculateBMI({
        name: this.name,
        age: this.age,
        gender: this.gender,
        height: this.height,
        weight: this.weight
      })
      .subscribe({

        next: (response) => {
          console.log(
            'BMI saved to backend:',
            response
          );
        },

        error: (error) => {
          console.error(
            'Backend save error:',
            error
          );
        }

      });
  }


  resetCalculator(): void {

    this.name = '';
    this.age = null;
    this.gender = '';
    this.height = null;
    this.weight = null;

    this.result = null;
    this.errorMessage = '';
    this.loading = false;
  }
}