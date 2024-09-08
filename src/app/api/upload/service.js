import constants from "@/constants";

export async function processFile({ type, file }) {
  if (!file) {
    throw new Error('Invalid file, the file is empty or null')
  }

  switch (type) {
    case constants.SALES_FILE: {
      return processSalesFile(file);
    }

    case constants.PURCHASES_FILE: {
      return processPurchasesFile(file);
    }

    default:
      throw new Error({ message: 'Invalid file type', additionalInformation: { type: type }})
  }
}

function processSalesFile(file) {}

function processPurchasesFile(file) {}
