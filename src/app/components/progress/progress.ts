import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FitnessService } from '../../services/fitness';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './progress.html',
  styleUrl: './progress.css'
})
export class Progress implements OnInit {

  weight: number | null = null;
  bmi: number | null = null;

  records: any[] = [];
  loading = false;

  constructor(
    private fitnessService: FitnessService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    const savedUser = localStorage.getItem('fittrackUser');

    if (savedUser) {

      const user = JSON.parse(savedUser);

      this.weight = user.weight;
      this.bmi = user.bmi;
    }

    this.loadHistory();
  }


  loadHistory(): void {

    this.loading = true;

    this.fitnessService.getBMIHistory().subscribe({

      next: (response) => {

        console.log('BMI HISTORY:', response);

        this.records = [...response];

        this.loading = false;

        this.changeDetector.detectChanges();
      },

      error: (error) => {

        console.error('History API error:', error);

        this.loading = false;

        this.changeDetector.detectChanges();
      }

    });
  }


  addProgress(): void {

    alert(
      'Please use the BMI Calculator to create a new progress record.'
    );
  }


  deleteRecord(index: number): void {

    const record = this.records[index];

    if (!record || !record.id) {
      return;
    }

    this.fitnessService
      .deleteBMIRecord(record.id)
      .subscribe({

        next: () => {

          this.records =
            this.records.filter(
              item => item.id !== record.id
            );

          this.changeDetector.detectChanges();
        },

        error: (error) => {

          console.error(
            'Delete error:',
            error
          );
        }

      });
  }


  clearHistory(): void {

    this.fitnessService
      .clearBMIHistory()
      .subscribe({

        next: () => {

          this.records = [];

          this.changeDetector.detectChanges();
        },

        error: (error) => {

          console.error(
            'Clear history error:',
            error
          );
        }

      });
  }
}