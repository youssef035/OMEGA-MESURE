export interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
  categories: ('product' | 'service' | 'balance_et_indicateur' | 'plateforme_de_pesage')[];
  details: string;
}

export const services: Service[] = [
  {
    id: 16,
    name: 'Étalonnage de Balances',
    description: 'Services professionnels d\'étalonnage pour garantir des mesures précises et conformes aux normes',
    image: '/images/services/calib.jpeg',
    categories: ['service'],
    details: 'Nous proposons des services professionnels d\'étalonnage de balances pour garantir la précision et la conformité de vos instruments de pesage. Grâce à notre expertise et à nos équipements certifiés, nous assurons un étalonnage conforme aux normes en vigueur. Notre service s\'adapte aux secteurs industriels, commerciaux et laboratoires. Faites confiance à notre savoir-faire pour maintenir la fiabilité de vos mesures.'
  },
  {
    id: 17,
    name: 'Réparation de Balances',
    description: 'Services de réparation experts pour tous types de balances',
    image: '/images/services/reparation.jpeg',
    categories: ['service'],
    details: 'Nous offrons un service de réparation rapide et fiable pour tous types de balances, quelle que soit la marque ou le modèle. Nos techniciens qualifiés diagnostiquent et réparent les pannes avec précision, en utilisant des pièces de rechange certifiées. Nous intervenons sur site ou dans notre atelier selon vos besoins, tout en respectant les normes de qualité et de sécurité en vigueur. Redonnez à vos équipements leur performance d\'origine grâce à notre expertise.'
  },
  {
    id: 18,
    name: 'Maintenance de Balances',
    description: 'Maintenance préventive et corrective pour garantir le bon fonctionnement et prolonger la durée de vie de vos balances',
    image: '/images/services/mainten.jpg',
    categories: ['service'],
    details: 'Nous assurons la maintenance préventive et corrective de vos balances afin de garantir leur bon fonctionnement et prolonger leur durée de vie. Nos interventions régulières permettent de prévenir les pannes, réduire les temps d\'arrêt et maintenir la précision de vos instruments de pesage. Notre équipe intervient sur site avec des équipements adaptés et selon un planning flexible, pour s\'adapter à vos contraintes opérationnelles.'
  }
]; 