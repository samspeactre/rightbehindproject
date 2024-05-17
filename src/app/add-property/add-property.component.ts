import { Component } from '@angular/core';

interface ImageFile {
  name: string;
  size: number;
  url: string;
  file?: File;
}

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrl: './add-property.component.css'
})

export class AddPropertyComponent {
  selected = 'none';

  selectedFiles: ImageFile[] = [];
  additionalSelectedFiles: ImageFile[] = [];

  onFileSelected(event: any) {
    this.handleFileSelection(event, this.selectedFiles);
  }

  onAdditionalFileSelected(event: any) {
    this.handleFileSelection(event, this.additionalSelectedFiles);
  }

  handleFileSelection(event: any, targetArray: ImageFile[]) {
    const files: FileList = event.target.files;

    if (files.length + targetArray.length > 10) {
      alert('You can only upload a maximum of 10 images');
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.size > 8 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum allowed size is 8 MB.`);
        continue;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        targetArray.push({
          name: file.name,
          size: file.size,
          url: e.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  }

  removeFile(index: number) {
    this.selectedFiles.splice(index, 1);
  }

  removeAdditionalFile(index: number) {
    this.additionalSelectedFiles.splice(index, 1);
  }


}
