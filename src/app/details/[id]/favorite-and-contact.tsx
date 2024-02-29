'use client';

import Button from '@/components/button';
import HeartSVG from '@/components/heart-svg';
import ContactAgent from './contact-agent/contact-agent';
import { Property } from '@/types/property';
import Modal from '@/components/modal';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  restorePropertyAsFavorite,
  savePropertyAsFavorite,
} from '@/utils/localStorage';
import Link from 'next/link';
import { routes } from '@/config/routes';

const SaveProperty = ({
  data,
  setShowModal,
  isSaved,
}: {
  data: Property;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  isSaved?: boolean;
}) => {
  const [fillColor, setFillColor] = useState<undefined | string>(undefined);
  const [buttonText, setButtonText] = useState('Save Property');

  useEffect(() => {
    if (isSaved) {
      setFillColor('red');
      setButtonText('Saved Property');
    }
  }, [isSaved]);

  const handleSave = () => {
    if (!isSaved) savePropertyAsFavorite(data);
    setShowModal(true);
  };

  return (
    <div className="text-right min-h-[76px]">
      <Button onClick={handleSave}>
        <HeartSVG fill={fillColor} />
        {buttonText}
      </Button>
    </div>
  );
};

const ModalBodyContent = () => {
  const contentSaved = restorePropertyAsFavorite();
  if (!contentSaved) return <div>No content</div>;
  return (
    <div className="overflow-auto">
      <table className="">
        <thead>
          <tr>
            <th style={{ width: '75%' }}>Title</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {contentSaved.map((property) => (
            <tr
              key={property.Id}
              className="even:bg-gray-100 hover:bg-gray-300">
              <td>{property.Title}</td>
              <td>
                <Link
                  target="_blank"
                  className="underline decoration-solid text-blue-500 hover:text-blue-700"
                  href={`${routes.details}/${property.Id}`}>
                  Go to Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const currentPropertyIsAlreadySaved = (id: string | number) => {
  const contentSaved = restorePropertyAsFavorite();
  if (!contentSaved) return false;

  return Boolean(contentSaved.find((item) => item.Id === Number(id)));
};

const FavoriteAndContact = ({ data }: { data: Property }) => {
  const [showModal, setShowModal] = useState(false);
  const isSaved = currentPropertyIsAlreadySaved(data.Id);

  return (
    <div className="grid grid-cols-1 auto-rows-min gap-4 max-w-96">
      {showModal && (
        <Modal
          setClose={() => setShowModal(false)}
          title="Here is your favorites properties"
          body={<ModalBodyContent />}
        />
      )}
      <SaveProperty
        data={data}
        isSaved={isSaved}
        setShowModal={setShowModal}
      />
      <ContactAgent />
    </div>
  );
};

export default FavoriteAndContact;
