import { 
  Box, Image as ImageIcon, Layers, PenTool, Printer, 
  Copy, Book, Mail, Scan, RefreshCw, BookOpen, Ruler, Flag, 
  FileText, Tag, Receipt, MailOpen, CreditCard 
} from 'lucide-react';

export const servicesData = [
    // Communication & Office Services
    { title: "Typesetting", icon: FileText, category: "Office" },
    { title: "Graphic Designing", icon: PenTool, category: "Design" },
    { title: "Photo Copy", icon: Copy, category: "Office" },
    { title: "Laminating", icon: Layers, category: "Office" },
    { title: "Binding", icon: Book, category: "Office" },
    { title: "Email Services", icon: Mail, category: "Digital" },
    { title: "Scanning", icon: Scan, category: "Digital" },
    { title: "Reload / Top-up", icon: RefreshCw, category: "Digital" },
    
    // School & Stationery
    { title: "Exercise Books", icon: BookOpen, category: "Stationery" },
    { title: "School Items", icon: Ruler, category: "Stationery" },
    
    // Printing Solutions
    { title: "Offset Printing", icon: Printer, category: "Printing" },
    { title: "Digital Printing", icon: Printer, category: "Printing" },
    { title: "Posters", icon: ImageIcon, category: "Marketing" },
    { title: "Banners", icon: Flag, category: "Marketing" },
    { title: "Handbills / Flyers", icon: FileText, category: "Marketing" },
    { title: "Stickers", icon: Layers, category: "Marketing" },
    { title: "Labels", icon: Tag, category: "Marketing" },
    { title: "Bill Books", icon: Receipt, category: "Business" },
    { title: "Invitation Cards", icon: MailOpen, category: "Personal" },
    { title: "Books & Magazines", icon: Book, category: "Publishing" },
    { title: "Class Cards", icon: CreditCard, category: "Business" },
    { title: "Packaging Boxes", icon: Box, category: "Packaging" },
    { title: "Book Covers", icon: Book, category: "Publishing" }
];
