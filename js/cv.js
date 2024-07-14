function downloadCV() {
    const link = document.createElement('a');
    link.href = './data/files/CV_JSFM.pdf';
    link.download = 'CV_JSFM.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }