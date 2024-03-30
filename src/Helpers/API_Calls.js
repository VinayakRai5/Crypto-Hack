import axios from "axios"
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, updateDoc , doc } from "firebase/firestore";
import { firebaseConfig }  from '../Utils/firebase.js';



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



export async function FetchCoin(uid, timePeriod) {
  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${uid}`,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function FetchCoinPrice(uid, timePeriod) {
  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${uid}/history`,
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Fetch user data from Firestore based on UID
export async function FetchDBData(uid) {
  try {
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Create a new user in Firestore
export async function CreateUserinDB(uid, firstName, lastName, email, phone) {
  try {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      balance: 0.0, // Assuming initial balance is zero
      crypto_holdings: {}, // Assuming initial holdings are empty
    };
    userData.balance = Number(userData.balance);
    await setDoc(doc(db, 'users', uid), userData);
    console.log("Document successfully written!");
  } catch (error) {
    console.error(error);
  }
}


// Add money to user's balance
export async function addMoneyDB(uid, amount) {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      const currentBalance = userDoc.data().balance || 0;
      const parsedCurrentBalance = Number(currentBalance);
      const newBalance = parsedCurrentBalance + Number(amount);

      await updateDoc(userRef, {
        balance: newBalance
      });

      console.log("Balance updated successfully!");
      return { status: "Success" }; // Return success status
    } else {
      console.log('User document does not exist');
      return { status: "Error", message: "User document does not exist" }; // Return error status
    }
  } catch (error) {
    console.error(error);
    return { status: "Error", message: error.message }; // Return error status with message
  }
}


// Withdraw money from user's balance
export async function WithdrawMoney(uid, amount) {
  try {
    const userRef = doc(db, 'users', uid);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      const currentBalance = userDoc.data().balance || 0;
      const parsedCurrentBalance = Number(currentBalance)
      const newBalance = parsedCurrentBalance - Number(amount);
      await updateDoc(userRef, {
        balance: newBalance
      });
    console.log("Balance updated successfully!");
   } else{ console.log('User Document does not exist'); }
  } catch (error) {
    console.error(error);
  }
}

// Fetch user's balance
// export async function FetchBalance(uid) {
//   try {
//     const userRef = doc(db, 'users', uid);
//     const docSnap = await getDoc(userRef);
//     if (docSnap.exists()) {
//       return docSnap.data().balance;
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// Buy cryptocurrency and update user's holdings
export async function BuyCryptoAPI(uid, token_id, amount) {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      [`crypto_holdings.${token_id}`]: FieldValue.increment(amount)
    });
    console.log("Crypto holdings updated successfully!");
  } catch (error) {
    console.error(error);
  }
}

// Sell cryptocurrency and update user's holdings
export async function SellCryptoAPI(uid, token_id, amount) {
  try {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      [`crypto_holdings.${token_id}`]: FieldValue.increment(-amount)
    });
    console.log("Crypto holdings updated successfully!");
  } catch (error) {
    console.error(error);
  }
}

// Fetch user's cryptocurrency holdings
export async function FetchCryptoHoldings(uid) {
  try {
    const userRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data().crypto_holdings || {};
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Fetch user's initial balance
export async function FetchInitialBalance(uid) {
  try {
    const userRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data().balance || 0;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
// export async function FetchBalance(uid) {
  //   try {
  //     const userRef = doc(db, 'users', uid);
  //     const docSnap = await getDoc(userRef);
  //     if (docSnap.exists()) {
  //       return docSnap.data().balance;
  //     } else {
  //       console.log('No such document!');
  //       return null;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return null;
  //   }
  // }

// Fetch individual cryptocurrency holding
export async function FetchIndividualCryptoHolding(uid, token_id) {
  try {
    const userRef = doc(db, 'users', uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const crypto_holdings = docSnap.data().crypto_holdings || {};
      return crypto_holdings[token_id] || 0;
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

// export async function FetchDBData(uid, accessToken) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       return doc.data();
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function CreateUserinDB(uid, First_Name, Last_Name, Email, Phone) {
//   try {
//     await db.collection('users').doc(uid).set({
//       First_Name,
//       Last_Name,
//       Email,
//       Phone,
//       balance: 0, // Assuming initial balance is zero
//       crypto_holdings: {}, // Assuming initial holdings are empty
//       // Add more fields as needed
//     });
//     console.log("Document successfully written!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function addMoneyDB(uid, amount) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     await docRef.update({
//       balance: firestore.FieldValue.increment(amount)
//     });
//     console.log("Balance updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function WithdrawMoney(uid, amount) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     await docRef.update({
//       balance: firestore.FieldValue.increment(-amount)
//     });
//     console.log("Balance updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function FetchBalance(uid) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       return doc.data().balance;
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function BuyCryptoAPI(uid, token_id, amount) {
//   try {
//     // Update the user's crypto holdings in Firestore
//     const docRef = db.collection('users').doc(uid);
//     await docRef.update({
//       [`crypto_holdings.${token_id}`]: firestore.FieldValue.increment(amount)
//     });
//     console.log("Crypto holdings updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function SellCryptoAPI(uid, token_id, amount) {
//   try {
//     // Update the user's crypto holdings in Firestore
//     const docRef = db.collection('users').doc(uid);
//     await docRef.update({
//       [`crypto_holdings.${token_id}`]: firestore.FieldValue.increment(-amount)
//     });
//     console.log("Crypto holdings updated successfully!");
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function FetchCryptoHoldings(uid) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       return doc.data().crypto_holdings || {};
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function FetchCryptoTransactions(uid) {
  // Implement based on your application logic
}

export async function FetchFiatTransactions(uid) {
  // Implement based on your application logic
}

// export async function FetchInitialBalance(uid) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       return doc.data().balance || 0;
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export async function FetchIndividualCryptoHolding(uid, token_id) {
//   try {
//     const docRef = db.collection('users').doc(uid);
//     const doc = await docRef.get();
//     if (doc.exists) {
//       const crypto_holdings = doc.data().crypto_holdings || {};
//       return crypto_holdings[token_id] || 0;
//     } else {
//       console.log('No such document!');
//       return null;
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

export async function FetchListOfCoins(symbol_list) {
  const listofSymbols = {}

  symbol_list.map((sym, i) => {
    listofSymbols[`symbols[${i}]`] = sym;
  })

  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coins`,
    params: {
      'tiers[0]': '1',
      ...listofSymbols
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}