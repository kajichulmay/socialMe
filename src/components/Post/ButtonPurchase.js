import React from 'react';
import axios from '../../config/axios';
function ButtonPurchase() {
  const postId = 1;
  const price = 60;
  const userId = 1;
  let OmiseCard = window.OmiseCard;
  const createCreditCard = async (postId, tokenOmise, userId, price) => {
    await axios.post(`/check-payment/`, { postId, price, tokenOmise, userId });
  };
  const omiseCardfn = () => {
    OmiseCard.configure({
      publicKey: 'pkey_test_5pm8bbc928j0bc6hyvw',
    });

    OmiseCard.configureButton('#purchaseBtn', {
      publicKey: 'OMISE_PUBLIC_KEY',
      amount: 10000,
      frameLabel: 'Merchant Name',
      submitLabel: 'Pay',
    });

    OmiseCard.attach();
  };
  const OpenOmiseCard = () => {
    OmiseCard.open({
      amount: 6000,
      submitFormTarget: '#checkout-form',

      onCreateTokenSuccess: tokenOmise => {
        createCreditCard(postId, tokenOmise, userId, price);
        /* Handler on token or source creation.  Use this to submit form or send ajax request to server */
      },
      onFormClosed: () => {
        /* Handler on form closure. */
      },
    });
  };

  const handleClickPurchase = e => {
    e.preventDefault();
    omiseCardfn();
    OpenOmiseCard();
  };

  return (
    <form>
      <div className="content-section mt-4 flex flex-col  px-4">
        <div className="  w-full mt-4 mb-8 flex justify-center  ">
          <button
            id="purchaseBtn"
            onClick={handleClickPurchase}
            className=" text-white font-light italic text-xl rounded-full shadow-input w-auto p-6 h-10 flex justify-center items-center bg-primary-grad forhover"
          >
            Purchase to unlock
          </button>
        </div>
      </div>
    </form>
  );
}

export default ButtonPurchase;
