export default {
    items: [
        {
            id: 'navigation',
            title: 'Infra',
            caption: '',
            type: 'group',
            icon: '',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard',
                },
                {
                    id: 'bootstrap',
                    title: 'Bootstrap',
                    type: 'item',
                    url: '/bootstrap',
                    target: true,
                },
            ],
        },
        {
            id: 'cloud',
            title: 'Cloud',
            caption: '',
            type: 'group',
            icon: '',
            children: [
                {
                    id: 'kubernetes',
                    title: 'Kubernetes',
                    type: 'item',
                    url: '/kubernetes',
                },
            ],
        }  
    ]
};
