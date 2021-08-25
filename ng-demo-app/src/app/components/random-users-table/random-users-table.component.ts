import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { RandomApiService } from 'src/app/services/random-api.service';
import { IRandomUsers } from 'src/app/models/random-users';

@Component({
  selector: 'app-random-users-table',
  templateUrl: './random-users-table.component.html',
  styleUrls: ['./random-users-table.component.scss']
})
export class RandomUsersTableComponent implements OnInit, OnDestroy {

  private subs = new Subscription();

  displayedColumns: string[] = ['action', 'avatar', 'username', 'email', 'date_of_birth', 'latidtude', 'longitude',];

  public dataSource: MatTableDataSource<IRandomUsers>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  private dataArray: any;

  constructor(private financeService: RandomApiService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subs.add(this.financeService.getRandomUsers()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<IRandomUsers>(this.dataArray);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public openRecord(id: number, name: string): void {
    this._snackBar.open(`Record ${id} ${name} `, 'Close', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });    
  }
}
