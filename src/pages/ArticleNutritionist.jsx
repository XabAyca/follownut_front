import SidebarNutritionist from 'components/SidebarNutritionist';
import React from 'react';

const ArticleNutritionist = () => {
  return (
    <div className="dashboard-page page-padding">
      <div className="dashboard-page-left">
        <SidebarNutritionist /> 
      </div>
      <div className="dashboard-page-right">
        <div className="d-flex justify-content-center py-5">
          Page article pour les nutritionistes
        </div>
      </div>
    </div>
  );
};

export default ArticleNutritionist;