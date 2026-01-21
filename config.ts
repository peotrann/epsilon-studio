
import { Category, VideoConfig, Document } from './types';

export const CATEGORIES: Category[] = [
  { id: 'discrete-math', name: 'Discrete Mathematics' },
  { id: 'calculus', name: 'Calculus' },
  { id: 'coding', name: 'Coding, It Works (Don’t Touch)' },
  { id: 'heal', name: 'Heal, Grow, and Thrive' },
  { id: 'giggles', name: 'Giggles Only' },
  { id: 'others', name: 'Others' },
];

export const VIDEOS: VideoConfig[] = [
  { youtubeUrl: 'https://youtu.be/JPGDwbAScOk?si=yK6FFfgYcxDbPLLr', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/oOojlDNBP6Y?si=lgkI3EB9SXFZ7dx4', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/KkQSB66KXCA?si=EWVLFVkrqFRtsj-8', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/FZCp8OaPMSQ?si=TONjHUYm_fJJIl4z', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/Bztmgem7nwo?si=hKJ9RboG-67v7CgH', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/PuhbYt6-MEE?si=yAKmdF3mHvOxxqJD', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/WmHXKaQ2WaM?si=KqLad3xgDR2CEQ4T', category: 'discrete-math' },
  { youtubeUrl: 'https://youtu.be/ciNrKco_fkI?si=PFaVd-9W3tNsxyBG', category: 'discrete-math' },

  { youtubeUrl: 'https://youtu.be/pvJeHjc5jaE?si=63dF-0GNBqLz6cgc', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/iIGVlcx7sa4?si=4Vtc-tWzz6L8Xazp', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/9oQV8IOPJCg?si=Wt9-uO6skzHOv-8M', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/5DSEiyHvL24?si=ohJl9uztD6T5Gyb8', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/IfUYPfBIXo8?si=3BiqelLD8ou4pwyK', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/rRAzQn94KX0?si=3MOoiiYwJ5q7-z9S', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/LzyGrRfy4DM?si=WbUMPO29d9VWOTmJ', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/IbjaxHKq7AM?si=riOaWvxlcII3souK', category: 'calculus' },
  { youtubeUrl: 'https://youtu.be/efjjX3goMkw?si=lrZYvznG6j47FDAZ', category: 'calculus' },

  { youtubeUrl: 'https://youtu.be/DMxQyTxqzIk?si=bDxRmmUbK-1_AS-7', category: 'coding' },

  { youtubeUrl: 'https://youtu.be/P5HcYu8hi1A?si=fUY-1_oj8WycDSuT', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/92z61MuEnLI?si=so5QjOR_Hm0GUTm8', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/u8PjHqDwRZE?si=VOAHx5xmQ2yw6Cmq', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/iCakXclIfVA?si=AXU4lPwg3_THJ-UD', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/mgSJUgTQE70?si=OnbU3ys_tCIoS3FZ', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/lrVZuJKvG8E?si=Be-iJNBnSMUkKP7l', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/Zqms5uFvev4?si=DZVeunt0ZlteUGwn', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/050ePyxtlRU?si=vpVgrvgm7cXbXe66', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/o2nDjz_FQew?si=4-Efh66VzHL3e9w2', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/ugyFjpY45hI?si=wCdUvZLXb9fJfvdB', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/lesjo3lpLr8?si=uMeqKvpCwIXuUEFl', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/xdi4vfkFMwM?si=ipOS67mAzCUVve0Z', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/carYWtaBV88?si=jffgJzPyRBL8rFZ8', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/nCMZwUdpN3g?si=m43UOD6PAdohQ--d', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/q77mP73Iax0?si=-GtkVz-kceKNlLGu', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/2AQqQ5MILN4?si=XhgTaNZBrPHLCP2m', category: 'heal' },
  { youtubeUrl: 'https://youtu.be/fTtTJSz2k_g?si=L6QOUbMItpMSBSsb', category: 'heal' },
  

  { youtubeUrl: 'https://youtu.be/-pvc2AxXqu4?si=H5uDLr1P1wZoU3G6', category: 'giggles' },
  { youtubeUrl: 'https://youtu.be/le36ytIdIuI?si=f1NKAZVWwXeA5YAr', category: 'giggles' },
];

export const DOCUMENTS: Document[] = [
  { id: '1', title: 'Giáo trình Toán rời rạc Tập 1', filePath: '/docs/Tai lieu hoc CTRR.pdf', fileType: 'PDF' },
  { id: '2', title: 'Giáo trình Toán rời rạc Tập 2', filePath: '/docs/CauTrucRoiRac_2.pdf', fileType: 'PDF' },
];