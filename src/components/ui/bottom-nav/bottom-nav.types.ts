export interface BottomNavProps {
  activeTab?: 'home' | 'collection' | 'contact';
  onTabChange?: (tab: 'home' | 'collection' | 'contact') => void;
}