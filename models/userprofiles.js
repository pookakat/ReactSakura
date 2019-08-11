const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const UserProfiles = sequelize.define('UserProfiles',{
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        // validate: {
        //     len:
        // }

    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'Gardener'

    },
    email: {
        type: Sequelize.STRING,
        allowNull: true,
        default: 'none'
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false

    },
    geocode: {
        type: Sequelize.STRING

    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    },
    image: {
        type: Sequelize.STRING,
        allowNull: true
        

    },
    avatar:{
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'flower'


    },
    intro: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: 'an empty plot...'

    },
    hasGarden: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false

    },
    availableTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 5

    },
    organic: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    flowers:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    tomatoes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cucumbers:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    sweetPeppers: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    beans:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    peas: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    carrots: {
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    squash:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    lettuce:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    watermelon:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    onion:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    sweetCorn:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cabbage:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    potatoes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    radishes:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    mint:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    basil:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    cilantro:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    beets:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    zucchini:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    broccoli:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    },
    other:{
        type: Sequelize.BOOLEAN,
        defaultValue: true

    }

},{
    freezeTableName: true
});
userprofiles.sync().then(()=>{
    UserProfiles.create({
        firstName:'robert',
        lastName: 'paulson',
        email: 'rpaulson@gmail.com',
        location: 'durham',
        geocode: '23-58-23-192',
        password: 'we need to hash this',
        image: 'yay images',
        avatar: 'potato',
        intro: 'I like to eat potatoes',
        hasGarden: true,
        availableTime: 5,
        organic: false,
        flowers: false,
        tomatoes: false,
        cucumbers: false,
        sweetPeppers: false,
        beans: false,
        peas: false,
        carrots: false,
        squash: false,
        lettuce: false,
        watermelon: false,
        onion: false,
        sweetCorn: false,
        cabbage: false,
        potatoes: true,
        radishes: false,
        mint: false,
        basil: false,
        cilantro: false,
        beets: false,
        zucchini: false,
        broccoli: false,
        other: false
    })
    UserProfiles.create({
        firstName:'marge',
        lastName: 'beluga',
        email: 'beluga@gmail.com',
        location: 'raleigh',
        geocode: '23-57-23-192',
        password: 'we need to hash this too',
        image: 'yay images',
        avatar: 'not a potato',
        intro: 'I dont  like to eat potatoes',
        hasGarden: true,
        availableTime: 5,
        organic: true,
        flowers: true,
        tomatoes: true,
        cucumbers: true,
        sweetPeppers: true,
        beans: true,
        peas: true,
        carrots: true,
        squash: true,
        lettuce: true,
        watermelon: true,
        onion: true,
        sweetCorn: true,
        cabbage: true,
        potatoes: false,
        radishes: true,
        mint: true,
        basil: true,
        cilantro: true,
        beets: true,
        zucchini: true,
        broccoli: true,
        other: true
    })
    UserProfiles.create({
        firstName:'random',
        lastName: 'stranger',
        email: 'ihadbugsforlunch@gmail.com',
        location: 'chapel hill',
        geocode: '23-57-23-192',
        password: 'we need to hash this too too',
        image: 'yay images',
        avatar: 'not a potato',
        intro: 'I dont  like to eat potatoes',
        hasGarden: true,
        availableTime: 5,
        organic: false,
        flowers: true,
        tomatoes: true,
        cucumbers: true,
        sweetPeppers: true,
        beans: true,
        peas: true,
        carrots: true,
        squash: true,
        lettuce: true,
        watermelon: true,
        onion: true,
        sweetCorn: true,
        cabbage: true,
        potatoes: false,
        radishes: true,
        mint: false,
        basil: true,
        cilantro: true,
        beets: true,
        zucchini: true,
        broccoli: true,
        other: true
    })
});

module.exports = UserProfiles;