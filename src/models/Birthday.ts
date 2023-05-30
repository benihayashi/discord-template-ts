import mongoose from 'mongoose'

const BirthdaySchema = new mongoose.Schema(
  {
    guildId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
    },
  },
  { collection: 'birthdays' }
)

const BirthdayModel = mongoose.model('birthdays', BirthdaySchema)

class Birthday {
  public static async get(query: { guildId: string }) {
    try {
      const data = await BirthdayModel.find(query)
      return data
    } catch (e) {
      throw new Error(e)
    }
  }

  public static async find(query: { guildId: string; userId: string }) {
    try {
      const data = await BirthdayModel.findOne(query)
      return data
    } catch (e) {
      throw new Error(e)
    }
  }

  public static async create(payload: { guildId: string; userId: string; dateTime: Date }) {
    try {
      const data = await BirthdayModel.create(payload)
      return data
    } catch (e) {
      throw new Error(e)
    }
  }
}

export default Birthday
