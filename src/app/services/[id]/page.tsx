import React from 'react';
import Link from 'next/link';
import ServiceDetails from './ServiceDetails';
import { services } from '@/data/services';
import { extractIdFromSlug } from '@/utils/slugify';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const serviceId = extractIdFromSlug(id);
  const service = typeof serviceId === 'number' ? services.find(s => s.id === serviceId) : undefined;
  if (!service) {
    return { title: 'Service non trouvé | OmegaMesure' };
  }
  return {
    title: `${service.name} | OmegaMesure`,
    description: service.description,
  };
}

export default async function ServicePage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const serviceId = extractIdFromSlug(id);
  const service = typeof serviceId === 'number' ? services.find(s => s.id === serviceId) : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary-900 mb-4">Service non trouvé</h1>
          <Link 
            href="/services"
            className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors inline-block"
          >
            Retour aux services
          </Link>
        </div>
      </div>
    );
  }

  return <ServiceDetails service={service} />;
} 