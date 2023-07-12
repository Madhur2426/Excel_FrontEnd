import { Component } from '@angular/core';
import { UploadServiceService } from '../upload-service.service';
import { ExcelSheet } from '../excel-sheet';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {
  show = false;
  ExcelData?:ExcelSheet[]=[];
   constructor(private fileUploadService:UploadServiceService){}
  selectedFile: File | null = null;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  uploadFile() {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile).subscribe(
        (response: any) => {
          console.log('File uploaded successfully.', response);
          if (response.status === 200) {
            this.show = true;
            console.log('Success. Server returned status:', response.status);
          } else {
            console.log('Failed to upload file. Server returned status:', response.status);
          }
        },
        (error: any) => {
          console.log('Failed to upload file.', error);
          this.show = true;
        }
      );
    } else {
      console.log('No file selected.');
    }
}
getData(){
 this.fileUploadService.getData().subscribe(   (response: any) => {
    if (response.status === 200) {
      this.show = true;
      const responseBody = JSON.parse(response.body);

        // Assigning the parsed data to this.ExcelData
        this.ExcelData = responseBody;
            console.log("this is my response",this.ExcelData);
      console.log('Success. Server returned status:', response.status);
    } else {
      console.log('Failed to upload file. Server returned status:', response.status);
    }
  },
  (error: any) => {
    console.log('Failed to upload file.', error);
    this.show = true;
  }
);
}
}
