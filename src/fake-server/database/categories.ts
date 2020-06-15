import { CategoryDef } from '../interfaces/category-def';
import { Category } from '../../app/shared/interfaces/category';
import { Observable, of, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

let lastCategoryId = 0;

const shopCategoriesDef: CategoryDef[] = [
    {
        name: 'Construccion y Ferreteria',
        slug: 'cyf',
        items: 100,
        children: [
            {
                name: 'Materiales de Construccion',
                slug: 'myc',
                image: 'assets/images/categories/category-1.jpg',
                items: 110,
                children: [
                    {
                        name: 'Ferreteria',
                        slug: 'ferreteria',
                        items: 111,
                    },
                    {
                        name: 'Techos',
                        slug: 'techos',
                        items: 112,
                    },
                    {
                        name: 'Escaleras',
                        slug: 'escaleras',
                        items: 113,
                    },
                    {
                        name: 'Cemento',
                        slug: 'cemento',
                        items: 114,
                    },
                    {
                        name: 'Ladrillo',
                        slug: 'ladrillo',
                        items: 115,
                    },
                ],
            },
            {
                name: 'Gastiferia',
                slug: 'gasfiteria',
                image: 'assets/images/categories/category-2.jpg',
                items: 120,
                children: [
                    {
                        name: 'Tanques de Agua',
                        slug: 'tanques',
                        items: 121,
                    },
                    {
                        name: 'Cisternas',
                        slug: 'cisternas',
                        items: 122,
                    },
                    {
                        name: 'Bombas y Motobombas',
                        slug: 'bombas',
                        items: 123,
                    },
                    {
                        name: 'Tubos de PVC',
                        slug: 'tubos',
                        items: 124,
                    },
                    {
                        name: 'Termas y Calentadores',
                        slug: 'termas',
                        items: 125,
                    },
                    {
                        name: 'Valvulas y Llaves de Paso',
                        slug: 'valvulas',
                        items: 125,
                    },
                ],
            },
            {
                name: 'Electricidad',
                slug: 'electricidad',
                image: 'assets/images/categories/category-3.jpg',
                items: 130,
                children: [
                    {
                        name: 'Cables y Alambres',
                        slug: 'cables',
                        items: 131,
                    },
                    {
                        name: 'Linternas',
                        slug: 'linternas',
                        items: 132,
                    },
                    {
                        name: 'Interruptor y Tomacorriente',
                        slug: 'interructor',
                        items: 133,
                    },
                    {
                        name: 'Canaletas',
                        slug: 'canaleta',
                        items: 134,
                    },
                    {
                        name: 'Tubos Electricos',
                        slug: 'tubose',
                        items: 135,
                    },
                ],
            },
            {
                name: 'Pinturas',
                slug: 'pinturas',
                image: 'assets/images/categories/category-4.jpg',
                items: 140,
                children: [
                    {
                        name: 'Pinturas de interior',
                        slug: 'interior',
                        items: 141,
                    },
                    {
                        name: 'Pinturas de Exterior',
                        slug: 'exterior',
                        items: 142,
                    },
                    {
                        name: 'Pinturas de Madera',
                        slug: 'madera',
                        items: 143,
                    },
                    {
                        name: 'Siliconas y Selladores',
                        slug: 'siliconas',
                        items: 144,
                    },

                ],
            },
            {
                name: 'Fijaciones y Adhesivos',
                slug: 'fya',
                image: 'assets/images/categories/category-5.jpg',
                items: 150,
                children: [
                    {
                        name: 'Adhesivos',
                        slug: 'adhesivos',
                        items: 51,
                    },
                    {
                        name: 'Accesorios para Colgar',
                        slug: 'accesorios',
                        items: 52,
                    },
                    {
                        name: 'Cintas aislantes',
                        slug: 'aislantes',
                        items: 53,
                    },
                    {
                        name: 'Tornillos, Clavos',
                        slug: 'tornillos',
                        items: 54,
                    },

                ],
            },

        ],
    },
    {
        name: 'Herramientas y Maquinas',
        slug: 'herramientas',
        items: 200,
    },
    {
        name: 'Pisos y Detalles',
        slug: 'pisos',
        items: 300,
    },
];
const blogCategoriesDef: CategoryDef[] = [
    {
        name: 'Latest News',
        slug: 'latest-news',
    },
    {
        name: 'Special Offers',
        slug: 'special-offers',
        children: [
            {
                name: 'Spring Sales',
                slug: 'spring-sales',
            },
            {
                name: 'Summer Sales',
                slug: 'summer-sales',
            },
            {
                name: 'Autumn Sales',
                slug: 'autumn-sales',
            },
            {
                name: 'Christmas Sales',
                slug: 'christmas-sales',
            },
            {
                name: 'Other Sales',
                slug: 'other-sales',
            }
        ],
    },
    {
        name: 'New Arrivals',
        slug: 'new-arrivals',
    },
    {
        name: 'Reviews',
        slug: 'reviews',
    },
    {
        name: 'Drills and Mixers',
        slug: 'drills-and-mixers',
    },
    {
        name: 'Cordless Screwdrivers',
        slug: 'cordless-screwdrivers',
    },
    {
        name: 'Screwdrivers',
        slug: 'screwdrivers',
    },
    {
        name: 'Wrenches',
        slug: 'wrenches',
    },
];

function walkTree(categoriesType: 'shop'|'blog', categoriesDef: CategoryDef[], parents: Category[] = []): [Category[], Category[]] {
    let list: Category[] = [];
    const tree: Category[] = categoriesDef.map(categoryDef => {
        const category: Category = {
            id: ++lastCategoryId,
            type: categoriesType,
            name: categoryDef.name,
            slug: categoryDef.slug,
            path: [...parents.map(x => x.slug), categoryDef.slug].join('/'),
            image: categoryDef.image || null,
            items: categoryDef.items || 0,
            customFields: {},
            parents: parents.slice(),
            children: [],
        };

        const [childrenTree, childrenList] = walkTree(categoriesType, categoryDef.children || [], [...parents, category]);

        category.children = childrenTree;
        list = [...list, category, ...childrenList];

        return category;
    });

    return [tree, list];
}

export const [shopCategoriesTree, shopCategoriesList]: [Category[], Category[]] = walkTree('shop', shopCategoriesDef);
export const [blogCategoriesTree, blogCategoriesList]: [Category[], Category[]] = walkTree('blog', blogCategoriesDef);

function limitDepth(categories: Category[], depth: number): Category[] {
    return categories.map(category => {
        return {
            ...category,
            parents: null,
            children: depth !== 0 ? limitDepth(category.children, depth - 1) : null,
        };
    });
}

function getCategoriesTree(categoriesType: 'shop'|'blog', parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    let categories = [];
    const list = categoriesType === 'shop' ? shopCategoriesList : blogCategoriesList;
    const tree = categoriesType === 'shop' ? shopCategoriesTree : blogCategoriesTree;

    if (parentSlug === null) {
        categories = tree.slice();
    } else {
        const parent = list.find(x => x.slug === parentSlug);

        if (!parent) {
            return throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
        }

        categories = parent.children.slice();
    }

    return of(limitDepth(categories, depth));
}

export function getShopCategoriesTree(parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    return getCategoriesTree('shop', parentSlug, depth);
}

export function getBlogCategoriesTree(parentSlug: string = null, depth: number = 0): Observable<Category[]> {
    return getCategoriesTree('blog', parentSlug, depth);
}

export function getShopCategoriesBySlugs(slugs: string[], depth: number = 0): Observable<Category[]> {
    return of(limitDepth(shopCategoriesList.filter(x => slugs.includes(x.slug)), depth));
}

export function getShopCategory(slug: string): Observable<Category> {
    const category = shopCategoriesList.find(x => x.slug === slug);

    if (!category) {
        return throwError(new HttpErrorResponse({status: 404, statusText: 'Page Not Found'}));
    }

    return of(JSON.parse(JSON.stringify({
        ...category,
        parents: limitDepth(category.parents, 0),
        children: limitDepth(category.children, 0),
    })));
}
