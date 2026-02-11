export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 snap-start">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Max Print</h3>
            <p className="text-gray-400">
              Premium quality printing and communication solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Business Cards</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Flyers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Banners</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Custom Prints</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 text-gray-200">Company</h4>
             <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
             </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gray-200">Support</h4>
             <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Returns</a></li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Max Print. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
