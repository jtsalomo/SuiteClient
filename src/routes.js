import React from 'react';
import {Route, IndexRoute} from 'react-router';

import MainLayout from './components/layouts/MainLayout';
import DashboardLayout from './components/layouts/DashboardLayout';

import HomePage from './components/pages/HomePage';
import SavingsCalculatorPage from './components/pages/SavingsCalculatorPage';
//import DataTablesPage from './components/pages/DataTablesPage';
import DataTablesPage from './components/pages/DataTablesPageWithPagination';
import ChartsPage from './components/pages/ChartsPage';
import RichTextEditorPage from './components/pages/RichTextEditorPage';
import LazyLoadingPage from './components/pages/LazyLoadingPage';
import AnimationPage from './components/pages/AnimationPage';
import OtherComponentsPage from './components/pages/OtherComponentsPage';
import GridSystemPage from './components/pages/GridSystemPage';
import AtomsPage from './components/pages/AtomsPage';
import MoleculesPage from './components/pages/MoleculesPage';
import OrganismsPage from './components/pages/OrganismsPage';
import TemplatesPage from './components/pages/TemplatesPage';
import DocumentationPage from './components/pages/DocumentationPage';

import TemplateFluid from './components/templates/TemplateFluid';
import TemplateFixed from './components/templates/TemplateFixed';
import TemplateHybrid from './components/templates/TemplateHybrid';
import TemplateContentOnly from './components/templates/TemplateContentOnly';
import TemplateSidebarContent from './components/templates/TemplateSidebarContent';
import TemplateContentAside from './components/templates/TemplateContentAside';
import TemplateSidebarContentAside from './components/templates/TemplateSidebarContentAside';
import TemplateFocused from './components/templates/TemplateFocused';

import NotFoundPage from './components/pages/NotFound';

export default (
  <Route component={MainLayout}>
    <Route path='/' component={DashboardLayout}>
      <IndexRoute component={HomePage} />
      <Route path='/savingscalc' component={SavingsCalculatorPage} />
      <Route path='/datatables' component={DataTablesPage} />
      <Route path='/charts' component={ChartsPage} />
      <Route path='/rte' component={RichTextEditorPage} />
      <Route path='/lazyload' component={LazyLoadingPage} />
      <Route path='/animation' component={AnimationPage} />
      <Route path='/components' component={OtherComponentsPage} />
      <Route path='/grid' component={GridSystemPage} />
      <Route path='/atoms' component={AtomsPage} />
      <Route path='/molecules' component={MoleculesPage} />
      <Route path='/organisms' component={OrganismsPage} />
      <Route path='/templates' component={TemplatesPage} />
      <Route path='/docs' component={DocumentationPage} />
    </Route>

    <Route path='/template-fluid' component={TemplateFluid} />
    <Route path='/template-fixed' component={TemplateFixed} />
    <Route path='/template-hybrid' component={TemplateHybrid} />
    <Route path='/template-content-only' component={TemplateContentOnly} />
    <Route path='/template-sidebar-content' component={TemplateSidebarContent} />
    <Route path='/template-content-aside' component={TemplateContentAside} />
    <Route path='/template-sidebar-content-aside' component={TemplateSidebarContentAside} />
    <Route path='/template-focused' component={TemplateFocused} />

    <Route path='*' component={NotFoundPage} />
  </Route>
);
