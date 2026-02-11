import { 
  Box, Image as ImageIcon, Layers, PenTool, Printer, 
  Copy, Book, Mail, Scan, RefreshCw, BookOpen, Ruler, Flag, 
  FileText, Tag, Receipt, MailOpen, CreditCard 
} from 'lucide-react';

export const servicesData = [
    // Communication & Office Services
    { title: "Typesetting", icon: FileText, category: "Office", image: "/images/typesetting.jpg" },
    { title: "Graphic Designing", icon: PenTool, category: "Design", image: "/images/graphic-design.jpg" },
    { title: "Photo Copy", icon: Copy, category: "Office", image: "/images/photocopy.jpg" },
    { title: "Laminating", icon: Layers, category: "Office", image: "/images/photocopy.jpg" }, // Reuse for similar
    { title: "Binding", icon: Book, category: "Office", image: "/images/stationery.jpg" },
    { title: "Email Services", icon: Mail, category: "Digital", image: "/images/email.jpg" },
    { title: "Scanning", icon: Scan, category: "Digital", image: "/images/email.jpg" }, // Reuse
    { title: "Reload / Top-up", icon: RefreshCw, category: "Digital", image: "/images/email.jpg" },
    
    // School & Stationery
    { title: "Exercise Books", icon: BookOpen, category: "Stationery", image: "/images/stationery.jpg" },
    { title: "School Items", icon: Ruler, category: "Stationery", image: "/images/stationery.jpg" },
    
    // Printing Solutions
    { title: "Offset Printing", icon: Printer, category: "Printing", image: "/images/digital-print.jpg" },
    { title: "Digital Printing", icon: Printer, category: "Printing", image: "/images/digital-print.jpg" },
    { title: "Posters", icon: ImageIcon, category: "Marketing", image: "/images/posters.jpg" },
    { title: "Banners", icon: Flag, category: "Marketing", image: "/images/posters.jpg" },
    { title: "Handbills / Flyers", icon: FileText, category: "Marketing", image: "/images/posters.jpg" },
    { title: "Stickers", icon: Layers, category: "Marketing", image: "/images/graphic-design.jpg" },
    { title: "Labels", icon: Tag, category: "Marketing", image: "/images/graphic-design.jpg" },
    { title: "Bill Books", icon: Receipt, category: "Business", image: "/images/typesetting.jpg" },
    { title: "Invitation Cards", icon: MailOpen, category: "Personal", image: "/images/posters.jpg" },
    { title: "Books & Magazines", icon: Book, category: "Publishing", image: "/images/stationery.jpg" },
    { title: "Class Cards", icon: CreditCard, category: "Business", image: "/images/typesetting.jpg" },
    { title: "Packaging Boxes", icon: Box, category: "Packaging", image: "/images/digital-print.jpg" },
    { title: "Book Covers", icon: Book, category: "Publishing", image: "/images/stationery.jpg" }
];
