
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-event-purple">V SCC-IFMA</h3>
            <p className="text-gray-600 mt-1">V Semana da Ciência da Computação</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-600">&copy; {currentYear} - IFMA Campus Caxias</p>
            <p className="text-gray-500 text-sm mt-1">Todos os direitos reservados</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
