import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const isAuditPage = location.pathname === '/get-audit';

  return (
    <nav>
      {/* Your existing navigation items */}
      
      {/* Conditionally render the audit button */}
      {!isAuditPage && (
        <Link to="/get-audit" className="btn-primary">
          Get Your Free AI Audit
        </Link>
      )}
    </nav>
  );
}

export default Navigation; 