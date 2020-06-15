import { BrandDef } from '../interfaces/brand-def';
import { Brand } from '../../app/shared/interfaces/brand';
import { Observable, of } from 'rxjs';

let lastBrandId = 0;

const brandsDef: BrandDef[] = [
    {name: 'San Lorenzo', slug: 'san-lorenzo', image: 'assets/images/logos/1.png'},
    {name: 'Sapolio', slug: 'sapolio', image: 'assets/images/logos/2.png'},
    {name: 'Anypsa', slug: 'anypsa', image: 'assets/images/logos/3.png'},
    {name: 'Chema', slug: 'chema', image: 'assets/images/logos/4.png'},
    {name: 'Tekno', slug: 'tekno', image: 'assets/images/logos/5.png'},
    {name: 'Italgrif', slug: 'italgrif', image: 'assets/images/logos/6.png'},
    {name: 'Bocsh', slug: 'bocsh', image: 'assets/images/logos/7.png'},
];

export const brands: Brand[] = brandsDef.map(brandDef => {
    return {
        ...brandDef,
        id: ++lastBrandId,
    };
});

export function getBrands(): Observable<Brand[]> {
    return of(brands);
}

