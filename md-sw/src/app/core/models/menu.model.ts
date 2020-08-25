export interface MenuOption {
    id?: number;
    name: string;
    icon?: string;
    route?: string;
    roles: string[];
    childs: MenuOption[];
}
