import type {Route} from './+types/_index';
import {HOME_PAGE_QUERY} from '~/graphql';
import {useLoaderData} from 'react-router';
import {
  getMetaobjectField,
  getMetaobjectList,
  getMetaobjectImages,
  getMetaobjectFieldValue,
  parseRichText,
} from '~/lib';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Home'}];
};

export async function loader({context}: Route.LoaderArgs) {
  const {storefront} = context;

  const data = await storefront.query(HOME_PAGE_QUERY, {
    cache: storefront.CacheLong(),
  });

  return {
    homePage: data.metaobject,
  };
}

export default function Homepage() {
  const {homePage} = useLoaderData<typeof loader>();

  const backgroundField = getMetaobjectField(homePage, '1_background');

  const backgroundVideoDesktop = backgroundField?.reference?.sources?.[0]?.url;
  const backgroundVideoMobile = getMetaobjectField(
    homePage,
    '1_background_mobile',
  )?.reference?.sources?.[0]?.url;
  const titleRichText = getMetaobjectField(homePage, '1_title')?.value;
  const descriptionRichText = getMetaobjectField(
    homePage,
    '1_description',
  )?.value;
  const ourClientsTitle = getMetaobjectField(homePage, 'our_client')?.value;

  const featuresField = getMetaobjectField(homePage, '1_list_title');
  const featuresList = getMetaobjectList(featuresField, 'single_title');
  const features = featuresList
    .map((node) => getMetaobjectFieldValue(node, 'title'))
    .filter(Boolean);

  const clientImagesField = getMetaobjectField(homePage, 'images_client');
  const clientImages = getMetaobjectImages(clientImagesField);

  const title = parseRichText(titleRichText);
  const description = parseRichText(descriptionRichText);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video - Desktop */}
        {backgroundVideoDesktop && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover opacity-50 hidden md:block"
          >
            <source src={backgroundVideoDesktop} type="video/mp4" />
          </video>
        )}

        {/* Background Video - Mobile */}
        {backgroundVideoMobile && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute  w-full h-full object-cover opacity-50 md:hidden"
          >
            <source src={backgroundVideoMobile} type="video/mp4" />
          </video>
        )}

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Title */}
          {title && (
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
              {title.split('\n').map((line, i) => (
                <span
                  key={i}
                  className={i === 1 ? 'text-gray-400' : 'text-white'}
                >
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
          )}

          {description && (
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {description}
            </p>
          )}

          {/* Features List */}
          {features.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {features.map((feature: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* CTA Button */}
          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Book a demo
          </button>
        </div>
      </div>

      {/* Clients Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Our Clients Title */}
          {ourClientsTitle && (
            <h2 className="text-center text-gray-400 text-sm mb-12">
              {ourClientsTitle}
            </h2>
          )}

          {/* Client Logos */}
          {clientImages.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              {clientImages.map((client: any, index: number) => (
                <img
                  key={index}
                  src={client.image?.url}
                  alt={client.image?.altText || `Client ${index + 1}`}
                  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
