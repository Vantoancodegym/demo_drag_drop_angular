import { Component, OnInit } from '@angular/core';
import {Board} from '../interface/board';
import {Column} from '../interface/column';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})
export class MainviewComponent implements OnInit {

  constructor() { }

  boards: Board = new Board('Test Board', [
    new Column('Labels', [
      "Sprint 1",
      "Sprint 2",
      "Low",
      "Medium",
      "High",
      "Người Dùng",
      "Người Quản Lý Bảng",
      "Người Quản Lý Thẻ",
      "Người Quản Lý Card",
      "Người Quản Lý Thông báo",
    ]),
    new Column('Backlog', [
      "Là người dùng , tôi có thẻ tìm card theo tiêu đề hoặc mô tả",
      "Là người dùng, tôi muốn gắn một hoặc nhiều thành viên cho một card",
      "Là người dùng tôi muốn lọc các card của một board theo nhãn",
      "Là người dùng tôi muốn lọc các card của một board theo các thành viên được gắn tên",
      "Là người dùng tôi muốn bình luận vào một card",
      "Là người dùng tôi muốn nhận thông báo khi thành viên khác thêm card",
      "Là người dùng tôi muốn nhận thông báo khi thành viên khác chuyển vị trí card",
      "Là người dùng tôi muốn nhận thông báo khi được gắn một thẻ",
      "Là người dùng tôi muốn nhận thông báo khi người khác bình luận vào một thẻ",
    ]), new Column('Sprint 1', [
      'Là người dùng tôi muốn đăng nhập vào hệ thống',
      'Là người dùng tôi có thể đăng suất khỏi ứng dụng',
      'Là người dùng tôi có thể đăng ký một tài khoản',
      'Là người dùng tôi có thể đổi mật khẩu',
      'Là người dùng tôi muốn upload file ảnh đại diện',
      'Là người dùng tôi muốn tạo một bảng mới',

    ]),
    new Column('Todo', [
      '1.1 Dựng dao diện đăng nhập',
      '3.1 Làm giao diện đăng ký tài khoản',
      '10.1 Create API create list',
      '10.2 Tạo form backend hứng result và xử lý ',

    ]),
    new Column('Doing', [
      '6.1 Xây dựng phương thức tạo mới board',
    ]),
    new Column('Code Review', [
      'Mentros Nguyễn Văn Đức'
    ]),
    new Column('Done', [
     'Tạo database'
    ])
  ]);

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      console.log(event.previousContainer);
      console.log(event.container.data[event.currentIndex])
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      console.log(event.previousContainer);
      console.log(event.container.id)
    }
  }
  dropList(event: CdkDragDrop<Column[]>) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousIndex);
      console.log(event.currentIndex);
      console.log(event.previousContainer);
      console.log(event.container.data[event.currentIndex])
  }
}
