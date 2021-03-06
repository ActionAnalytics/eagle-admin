import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSnackBarModule } from '@angular/material';

import { ReviewCommentComponent } from './review-comment.component';
import { GetValuedComponentsComponent } from './get-valued-components/get-valued-components.component';
import { TableTemplateComponent } from 'app/shared/components/table-template/table-template.component';

import { ApiService } from 'app/services/api';
import { CommentService } from 'app/services/comment.service';
import { StorageService } from 'app/services/storage.service';
import { Utils } from 'app/shared/utils/utils';

import { of } from 'rxjs';

describe('ReviewCommentComponent', () => {
  let component: ReviewCommentComponent;
  let fixture: ComponentFixture<ReviewCommentComponent>;

  const mockApiService = jasmine.createSpyObj('ApiService', [
    'downloadDocument'
  ]);

  const mockCommentService = jasmine.createSpyObj('CommentService', [
    'pendingCommentCount',
    'nextCommentId',
    'save'
  ]);

  const mockStorageService = jasmine.createSpyObj('StorageService', [
    'state'
  ]);

  mockStorageService.state.currentProject = {
    data: {_id: 12345}
  };

  const mockUtils = jasmine.createSpyObj('Utils', [
    'convertJSDateToNGBDate',
    'convertFormGroupNGBDateToJSDate'
  ]);

  beforeEach( async (() => {
    TestBed.configureTestingModule({
      declarations: [
        ReviewCommentComponent,
        GetValuedComponentsComponent,
        TableTemplateComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgxPaginationModule,
        MatSnackBarModule
      ],
      providers: [
        { provide: ApiService, useValue: mockApiService},
        { provide: CommentService, useValue: mockCommentService},
        { provide: StorageService, useValue: mockStorageService},
        { provide: Utils, useValue: mockUtils}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCommentComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
