import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workouts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workouts.html',
  styleUrl: './workouts.css'
})
export class Workouts {

  selectedPlan: any = null;

  workoutPlans = [
    {
      icon: '🌱',
      title: 'Beginner Fitness',
      level: 'Beginner',
      duration: '30 min',
      days: '3 Days / Week',
      description: 'A simple full-body routine for beginners starting their fitness journey.',
      exercises: [
        '10 Bodyweight Squats',
        '8 Knee Push-ups',
        '20 sec Plank',
        '10 Lunges',
        '15 Jumping Jacks'
      ]
    },
    {
      icon: '🔥',
      title: 'Weight Loss',
      level: 'Intermediate',
      duration: '40 min',
      days: '5 Days / Week',
      description: 'Burn calories and improve cardiovascular fitness with this active workout.',
      exercises: [
        '30 Jumping Jacks',
        '15 Squats',
        '10 Push-ups',
        '20 Mountain Climbers',
        '30 sec Plank'
      ]
    },
    {
      icon: '💪',
      title: 'Muscle Gain',
      level: 'Intermediate',
      duration: '50 min',
      days: '4 Days / Week',
      description: 'Build strength and muscle using a structured resistance-focused routine.',
      exercises: [
        '12 Push-ups',
        '15 Squats',
        '12 Lunges Each Leg',
        '10 Chair Dips',
        '45 sec Plank'
      ]
    },
    {
      icon: '🏃',
      title: 'General Fitness',
      level: 'All Levels',
      duration: '35 min',
      days: '4 Days / Week',
      description: 'Improve overall strength, stamina, flexibility and everyday fitness.',
      exercises: [
        '20 Jumping Jacks',
        '12 Squats',
        '10 Push-ups',
        '15 Lunges',
        '30 sec Plank'
      ]
    }
  ];

  viewPlan(plan: any): void {
    this.selectedPlan = plan;
  }

  closePlan(): void {
    this.selectedPlan = null;
  }
}