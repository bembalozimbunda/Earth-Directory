export interface GeoNode {
  name: string;
  children?: GeoNode[];
  details?: {
    phone?: string;
    email?: string;
    nrc?: string;
    population?: number;
    language?: string;
    leader?: string;
    leaderSince?: string;
    previousLeader?: string;
  };
}

export const earthData: GeoNode[] = [
  {
    "name": "Alkebulan",
    "children": [
      {
        "name": "Algeria (People's Democratic Republic of Algeria) / President Abdelmadjid Tebboune",
        "children": [
          {
            "name": "Adrar",
            "details": {
              "population": 924009
            }
          },
          {
            "name": "Chlef",
            "details": {
              "population": 1085548
            }
          },
          {
            "name": "Laghouat",
            "details": {
              "population": 856943
            }
          },
          {
            "name": "Oum El Bouaghi",
            "details": {
              "population": 833016
            }
          },
          {
            "name": "Batna",
            "details": {
              "population": 1128016
            }
          },
          {
            "name": "Béjaïa",
            "details": {
              "population": 964839
            }
          },
          {
            "name": "Biskra",
            "details": {
              "population": 1095266
            }
          },
          {
            "name": "Béchar",
            "details": {
              "population": 959197
            }
          },
          {
            "name": "Blida",
            "details": {
              "population": 799517
            }
          },
          {
            "name": "Bouira",
            "details": {
              "population": 946112
            }
          },
          {
            "name": "Tamanrasset",
            "details": {
              "population": 924461
            }
          },
          {
            "name": "Tébessa",
            "details": {
              "population": 1055810
            }
          },
          {
            "name": "Tlemcen",
            "details": {
              "population": 1139838
            }
          },
          {
            "name": "Tiaret",
            "details": {
              "population": 886470
            }
          },
          {
            "name": "Tizi Ouzou",
            "details": {
              "population": 904706
            }
          },
          {
            "name": "Alger",
            "details": {
              "population": 1079924
            }
          },
          {
            "name": "Djelfa",
            "details": {
              "population": 962859
            }
          },
          {
            "name": "Jijel",
            "details": {
              "population": 1138513
            }
          },
          {
            "name": "Sétif",
            "details": {
              "population": 889504
            }
          },
          {
            "name": "Saïda",
            "details": {
              "population": 856698
            }
          },
          {
            "name": "Skikda",
            "details": {
              "population": 812219
            }
          },
          {
            "name": "Sidi Bel Abbès",
            "details": {
              "population": 951422
            }
          },
          {
            "name": "Annaba",
            "details": {
              "population": 849240
            }
          },
          {
            "name": "Guelma",
            "details": {
              "population": 828607
            }
          },
          {
            "name": "Constantine",
            "details": {
              "population": 1006817
            }
          },
          {
            "name": "Médéa",
            "details": {
              "population": 846441
            }
          },
          {
            "name": "Mostaganem",
            "details": {
              "population": 977534
            }
          },
          {
            "name": "M'Sila",
            "details": {
              "population": 787094
            }
          },
          {
            "name": "Mascara",
            "details": {
              "population": 1014738
            }
          },
          {
            "name": "Ouargla",
            "details": {
              "population": 824579
            }
          },
          {
            "name": "Oran",
            "details": {
              "population": 868083
            }
          },
          {
            "name": "El Bayadh",
            "details": {
              "population": 883591
            }
          },
          {
            "name": "Illizi",
            "details": {
              "population": 1123991
            }
          },
          {
            "name": "Bordj Bou Arréridj",
            "details": {
              "population": 1058710
            }
          },
          {
            "name": "Boumerdès",
            "details": {
              "population": 777361
            }
          },
          {
            "name": "El Tarf",
            "details": {
              "population": 969308
            }
          },
          {
            "name": "Tindouf",
            "details": {
              "population": 785358
            }
          },
          {
            "name": "Tissemsilt",
            "details": {
              "population": 770303
            }
          },
          {
            "name": "El Oued",
            "details": {
              "population": 1081384
            }
          },
          {
            "name": "Khenchela",
            "details": {
              "population": 819651
            }
          },
          {
            "name": "Souk Ahras",
            "details": {
              "population": 1133404
            }
          },
          {
            "name": "Tipaza",
            "details": {
              "population": 1130650
            }
          },
          {
            "name": "Mila",
            "details": {
              "population": 896496
            }
          },
          {
            "name": "Aïn Defla",
            "details": {
              "population": 1128150
            }
          },
          {
            "name": "Naâma",
            "details": {
              "population": 1084990
            }
          },
          {
            "name": "Aïn Témouchent",
            "details": {
              "population": 1067027
            }
          },
          {
            "name": "Ghardaïa",
            "details": {
              "population": 954885
            }
          },
          {
            "name": "Relizane",
            "details": {
              "population": 736721
            }
          }
        ],
        "details": {
          "population": 45600000,
          "language": "Arabic, Tamazight",
          "leader": "President Abdelmadjid Tebboune",
          "leaderSince": "2019-12-19",
          "previousLeader": "Abdelaziz Bouteflika"
        }
      },
      {
        "name": "Angola (Republic of Angola) / President João Lourenço",
        "children": [
          {
            "name": "Bengo",
            "details": {
              "population": 1842725
            }
          },
          {
            "name": "Benguela",
            "details": {
              "population": 1994387
            }
          },
          {
            "name": "Bié",
            "details": {
              "population": 2050828
            }
          },
          {
            "name": "Cabinda",
            "details": {
              "population": 2121184
            }
          },
          {
            "name": "Cuando Cubango",
            "details": {
              "population": 2386317
            }
          },
          {
            "name": "Cuanza Norte",
            "details": {
              "population": 1821970
            }
          },
          {
            "name": "Cuanza Sul",
            "details": {
              "population": 2302139
            }
          },
          {
            "name": "Cunene",
            "details": {
              "population": 2313635
            }
          },
          {
            "name": "Huambo",
            "details": {
              "population": 1919064
            }
          },
          {
            "name": "Huíla",
            "details": {
              "population": 2286998
            }
          },
          {
            "name": "Luanda",
            "details": {
              "population": 2181425
            }
          },
          {
            "name": "Lunda Norte",
            "details": {
              "population": 2314450
            }
          },
          {
            "name": "Lunda Sul",
            "details": {
              "population": 2082091
            }
          },
          {
            "name": "Malanje",
            "details": {
              "population": 1675234
            }
          },
          {
            "name": "Moxico",
            "details": {
              "population": 1849493
            }
          },
          {
            "name": "Namibe",
            "details": {
              "population": 1627356
            }
          },
          {
            "name": "Uíge",
            "details": {
              "population": 1980673
            }
          },
          {
            "name": "Zaire",
            "details": {
              "population": 1850031
            }
          }
        ],
        "details": {
          "population": 36600000,
          "language": "Portuguese",
          "leader": "President João Lourenço",
          "leaderSince": "2017-09-26",
          "previousLeader": "José Eduardo dos Santos"
        }
      },
      {
        "name": "Benin (Republic of Benin) / President Patrice Talon",
        "children": [
          {
            "name": "Alibori",
            "details": {
              "population": 1227316
            }
          },
          {
            "name": "Atakora",
            "details": {
              "population": 1360194
            }
          },
          {
            "name": "Atlantique",
            "details": {
              "population": 1003551
            }
          },
          {
            "name": "Borgou",
            "details": {
              "population": 1199248
            }
          },
          {
            "name": "Collines",
            "details": {
              "population": 1180187
            }
          },
          {
            "name": "Couffo",
            "details": {
              "population": 989771
            }
          },
          {
            "name": "Donga",
            "details": {
              "population": 934516
            }
          },
          {
            "name": "Littoral",
            "details": {
              "population": 997972
            }
          },
          {
            "name": "Mono",
            "details": {
              "population": 1303090
            }
          },
          {
            "name": "Ouémé",
            "details": {
              "population": 1153437
            }
          },
          {
            "name": "Plateau",
            "details": {
              "population": 932504
            }
          },
          {
            "name": "Zou",
            "details": {
              "population": 1418214
            }
          }
        ],
        "details": {
          "population": 13700000,
          "language": "French",
          "leader": "President Patrice Talon",
          "leaderSince": "2016-04-06",
          "previousLeader": "Thomas Boni Yayi"
        }
      },
      {
        "name": "Botswana (Republic of Botswana) / President Mokgweetsi Masisi",
        "children": [
          {
            "name": "Central",
            "details": {
              "population": 210808
            }
          },
          {
            "name": "Chobe",
            "details": {
              "population": 259863
            }
          },
          {
            "name": "Ghanzi",
            "details": {
              "population": 274600
            }
          },
          {
            "name": "Kgalagadi",
            "details": {
              "population": 223871
            }
          },
          {
            "name": "Kgatleng",
            "details": {
              "population": 242889
            }
          },
          {
            "name": "Kweneng",
            "details": {
              "population": 240209
            }
          },
          {
            "name": "North-East",
            "details": {
              "population": 230890
            }
          },
          {
            "name": "North-West",
            "details": {
              "population": 235762
            }
          },
          {
            "name": "South-East",
            "details": {
              "population": 299467
            }
          },
          {
            "name": "Southern",
            "details": {
              "population": 381641
            }
          }
        ],
        "details": {
          "population": 2600000,
          "language": "English, Setswana",
          "leader": "President Mokgweetsi Masisi",
          "leaderSince": "2018-04-01",
          "previousLeader": "Ian Khama"
        }
      },
      {
        "name": "Burundi (Republic of Burundi) / President Évariste Ndayishimiye",
        "children": [
          {
            "name": "Bubanza",
            "details": {
              "population": 849569
            }
          },
          {
            "name": "Bujumbura Mairie",
            "details": {
              "population": 859934
            }
          },
          {
            "name": "Bujumbura Rural",
            "details": {
              "population": 715302
            }
          },
          {
            "name": "Bururi",
            "details": {
              "population": 650648
            }
          },
          {
            "name": "Cankuzo",
            "details": {
              "population": 766425
            }
          },
          {
            "name": "Cibitoke",
            "details": {
              "population": 793488
            }
          },
          {
            "name": "Gitega",
            "details": {
              "population": 626918
            }
          },
          {
            "name": "Karuzi",
            "details": {
              "population": 789325
            }
          },
          {
            "name": "Kayanza",
            "details": {
              "population": 708485
            }
          },
          {
            "name": "Kirundo",
            "details": {
              "population": 849025
            }
          },
          {
            "name": "Makamba",
            "details": {
              "population": 858475
            }
          },
          {
            "name": "Muramvya",
            "details": {
              "population": 675075
            }
          },
          {
            "name": "Muyinga",
            "details": {
              "population": 764787
            }
          },
          {
            "name": "Mwaro",
            "details": {
              "population": 666116
            }
          },
          {
            "name": "Ngozi",
            "details": {
              "population": 874361
            }
          },
          {
            "name": "Rumonge",
            "details": {
              "population": 832681
            }
          },
          {
            "name": "Rutana",
            "details": {
              "population": 700811
            }
          },
          {
            "name": "Ruyigi",
            "details": {
              "population": 218575
            }
          }
        ],
        "details": {
          "population": 13200000,
          "language": "Kirundi, French, English",
          "leader": "President Évariste Ndayishimiye",
          "leaderSince": "2020-06-18",
          "previousLeader": "Pierre Nkurunziza"
        }
      },
      {
        "name": "Cabo Verde (Republic of Cabo Verde) / President José Maria Neves",
        "children": [
          {
            "name": "Boa Vista",
            "details": {
              "population": 23512
            }
          },
          {
            "name": "Brava",
            "details": {
              "population": 24619
            }
          },
          {
            "name": "Maio",
            "details": {
              "population": 25076
            }
          },
          {
            "name": "Mosteiros",
            "details": {
              "population": 25241
            }
          },
          {
            "name": "Paul",
            "details": {
              "population": 24044
            }
          },
          {
            "name": "Porto Novo",
            "details": {
              "population": 23922
            }
          },
          {
            "name": "Praia",
            "details": {
              "population": 24290
            }
          },
          {
            "name": "Ribeira Brava",
            "details": {
              "population": 20498
            }
          },
          {
            "name": "Ribeira Grande",
            "details": {
              "population": 19027
            }
          },
          {
            "name": "Ribeira Grande de Santiago",
            "details": {
              "population": 21643
            }
          },
          {
            "name": "Sal",
            "details": {
              "population": 21298
            }
          },
          {
            "name": "Santa Catarina",
            "details": {
              "population": 20428
            }
          },
          {
            "name": "Santa Catarina do Fogo",
            "details": {
              "population": 26478
            }
          },
          {
            "name": "Santa Cruz",
            "details": {
              "population": 26404
            }
          },
          {
            "name": "São Domingos",
            "details": {
              "population": 22669
            }
          },
          {
            "name": "São Filipe",
            "details": {
              "population": 25236
            }
          },
          {
            "name": "São Lourenço dos Órgãos",
            "details": {
              "population": 19442
            }
          },
          {
            "name": "São Miguel",
            "details": {
              "population": 27019
            }
          },
          {
            "name": "São Salvador do Mundo",
            "details": {
              "population": 26755
            }
          },
          {
            "name": "São Vicente",
            "details": {
              "population": 23633
            }
          },
          {
            "name": "Tarrafal",
            "details": {
              "population": 24371
            }
          },
          {
            "name": "Tarrafal de São Nicolau",
            "details": {
              "population": 4395
            }
          }
        ],
        "details": {
          "population": 500000,
          "language": "Portuguese",
          "leader": "President José Maria Neves",
          "leaderSince": "2021-11-09",
          "previousLeader": "Jorge Carlos Fonseca"
        }
      },
      {
        "name": "Cameroon (Republic of Cameroon) / President Paul Biya",
        "children": [
          {
            "name": "Adamaoua",
            "details": {
              "population": 3065381
            }
          },
          {
            "name": "Centre",
            "details": {
              "population": 2708241
            }
          },
          {
            "name": "East",
            "details": {
              "population": 3362731
            }
          },
          {
            "name": "Far North",
            "details": {
              "population": 2620070
            }
          },
          {
            "name": "Littoral",
            "details": {
              "population": 2408335
            }
          },
          {
            "name": "North",
            "details": {
              "population": 2958920
            }
          },
          {
            "name": "North-West",
            "details": {
              "population": 2325839
            }
          },
          {
            "name": "South",
            "details": {
              "population": 3027369
            }
          },
          {
            "name": "South-West",
            "details": {
              "population": 3111106
            }
          },
          {
            "name": "West",
            "details": {
              "population": 3012008
            }
          }
        ],
        "details": {
          "population": 28600000,
          "language": "French, English",
          "leader": "President Paul Biya",
          "leaderSince": "1982-11-06",
          "previousLeader": "Ahmadou Ahidjo"
        }
      },
      {
        "name": "Central African Republic / President Faustin-Archange Touadéra",
        "children": [
          {
            "name": "Bamingui-Bangoran",
            "details": {
              "population": 358709
            }
          },
          {
            "name": "Bangui",
            "details": {
              "population": 294175
            }
          },
          {
            "name": "Basse-Kotto",
            "details": {
              "population": 304288
            }
          },
          {
            "name": "Haut-Mbomou",
            "details": {
              "population": 376650
            }
          },
          {
            "name": "Haute-Kotto",
            "details": {
              "population": 340790
            }
          },
          {
            "name": "Kémo",
            "details": {
              "population": 384793
            }
          },
          {
            "name": "Lobaye",
            "details": {
              "population": 299403
            }
          },
          {
            "name": "Mambéré-Kadéï",
            "details": {
              "population": 388750
            }
          },
          {
            "name": "Mbomou",
            "details": {
              "population": 311140
            }
          },
          {
            "name": "Nana-Gribizi",
            "details": {
              "population": 302300
            }
          },
          {
            "name": "Nana-Mambéré",
            "details": {
              "population": 310243
            }
          },
          {
            "name": "Ombella-M'Poko",
            "details": {
              "population": 279380
            }
          },
          {
            "name": "Ouaka",
            "details": {
              "population": 311299
            }
          },
          {
            "name": "Ouham",
            "details": {
              "population": 379872
            }
          },
          {
            "name": "Ouham-Pendé",
            "details": {
              "population": 286408
            }
          },
          {
            "name": "Sangha-Mbaéré",
            "details": {
              "population": 370551
            }
          },
          {
            "name": "Vakaga",
            "details": {
              "population": 401249
            }
          }
        ],
        "details": {
          "population": 5700000,
          "language": "Sango, French",
          "leader": "President Faustin-Archange Touadéra",
          "leaderSince": "2016-03-30",
          "previousLeader": "Catherine Samba-Panza"
        }
      },
      {
        "name": "Chad (Republic of Chad) / President Mahamat Idriss Déby",
        "children": [
          {
            "name": "Batha",
            "details": {
              "population": 713774
            }
          },
          {
            "name": "Borkou",
            "details": {
              "population": 806761
            }
          },
          {
            "name": "Chari-Baguirmi",
            "details": {
              "population": 809044
            }
          },
          {
            "name": "Ennedi-Est",
            "details": {
              "population": 709349
            }
          },
          {
            "name": "Ennedi-Ouest",
            "details": {
              "population": 939195
            }
          },
          {
            "name": "Guéra",
            "details": {
              "population": 792071
            }
          },
          {
            "name": "Hadjer-Lamis",
            "details": {
              "population": 909622
            }
          },
          {
            "name": "Kanem",
            "details": {
              "population": 788313
            }
          },
          {
            "name": "Lac",
            "details": {
              "population": 971916
            }
          },
          {
            "name": "Logone Occidental",
            "details": {
              "population": 988694
            }
          },
          {
            "name": "Logone Oriental",
            "details": {
              "population": 821719
            }
          },
          {
            "name": "Mandoul",
            "details": {
              "population": 953033
            }
          },
          {
            "name": "Mayo-Kebbi Est",
            "details": {
              "population": 748514
            }
          },
          {
            "name": "Mayo-Kebbi Ouest",
            "details": {
              "population": 671332
            }
          },
          {
            "name": "Moyen-Chari",
            "details": {
              "population": 797169
            }
          },
          {
            "name": "Ouaddaï",
            "details": {
              "population": 803048
            }
          },
          {
            "name": "Salamat",
            "details": {
              "population": 700882
            }
          },
          {
            "name": "Sila",
            "details": {
              "population": 921655
            }
          },
          {
            "name": "Tandjilé",
            "details": {
              "population": 707857
            }
          },
          {
            "name": "Tibesti",
            "details": {
              "population": 885425
            }
          },
          {
            "name": "Wadi Fira",
            "details": {
              "population": 844668
            }
          },
          {
            "name": "N'Djamena",
            "details": {
              "population": 915959
            }
          }
        ],
        "details": {
          "population": 18200000,
          "language": "Arabic, French",
          "leader": "President Mahamat Idriss Déby",
          "leaderSince": "2021-04-20",
          "previousLeader": "Idriss Déby"
        }
      },
      {
        "name": "Comoros (Union of the Comoros) / President Azali Assoumani",
        "children": [
          {
            "name": "Grande Comore",
            "details": {
              "population": 284626
            }
          },
          {
            "name": "Anjouan",
            "details": {
              "population": 260279
            }
          },
          {
            "name": "Mohéli",
            "details": {
              "population": 255095
            }
          }
        ],
        "details": {
          "population": 800000,
          "language": "Comorian, Arabic, French",
          "leader": "President Azali Assoumani",
          "leaderSince": "2016-05-26",
          "previousLeader": "Ikililou Dhoinine"
        }
      },
      {
        "name": "Congo, Democratic Republic of the / President Félix Tshisekedi",
        "children": [
          {
            "name": "Bas-Uele",
            "details": {
              "population": 3758472
            }
          },
          {
            "name": "Équateur",
            "details": {
              "population": 3597502
            }
          },
          {
            "name": "Haut-Katanga",
            "details": {
              "population": 3165276
            }
          },
          {
            "name": "Haut-Lomami",
            "details": {
              "population": 4178813
            }
          },
          {
            "name": "Haut-Uele",
            "details": {
              "population": 3795338
            }
          },
          {
            "name": "Ituri",
            "details": {
              "population": 3462471
            }
          },
          {
            "name": "Kasaï",
            "details": {
              "population": 4266607
            }
          },
          {
            "name": "Kasaï-Central",
            "details": {
              "population": 4399668
            }
          },
          {
            "name": "Kasaï-Oriental",
            "details": {
              "population": 3600709
            }
          },
          {
            "name": "Kinshasa",
            "details": {
              "population": 4508392
            }
          },
          {
            "name": "Kongo Central",
            "details": {
              "population": 3856621
            }
          },
          {
            "name": "Kwango",
            "details": {
              "population": 4502456
            }
          },
          {
            "name": "Kwilu",
            "details": {
              "population": 3187149
            }
          },
          {
            "name": "Lomami",
            "details": {
              "population": 3455293
            }
          },
          {
            "name": "Lualaba",
            "details": {
              "population": 4013784
            }
          },
          {
            "name": "Mai-Ndombe",
            "details": {
              "population": 3218825
            }
          },
          {
            "name": "Maniema",
            "details": {
              "population": 3294426
            }
          },
          {
            "name": "Mongala",
            "details": {
              "population": 3720797
            }
          },
          {
            "name": "Nord-Kivu",
            "details": {
              "population": 3186821
            }
          },
          {
            "name": "Nord-Ubangi",
            "details": {
              "population": 3372202
            }
          },
          {
            "name": "Sankuru",
            "details": {
              "population": 3209372
            }
          },
          {
            "name": "Sud-Kivu",
            "details": {
              "population": 3195696
            }
          },
          {
            "name": "Sud-Ubangi",
            "details": {
              "population": 3841243
            }
          },
          {
            "name": "Tanganyika",
            "details": {
              "population": 4671815
            }
          },
          {
            "name": "Tshopo",
            "details": {
              "population": 4124735
            }
          },
          {
            "name": "Tshuapa",
            "details": {
              "population": 8415517
            }
          }
        ],
        "details": {
          "population": 102000000,
          "language": "French",
          "leader": "President Félix Tshisekedi",
          "leaderSince": "2019-01-24",
          "previousLeader": "Joseph Kabila"
        }
      },
      {
        "name": "Congo, Republic of the / President Denis Sassou Nguesso",
        "children": [
          {
            "name": "Bouenza",
            "details": {
              "population": 563999
            }
          },
          {
            "name": "Brazzaville",
            "details": {
              "population": 519020
            }
          },
          {
            "name": "Cuvette",
            "details": {
              "population": 484425
            }
          },
          {
            "name": "Cuvette-Ouest",
            "details": {
              "population": 596601
            }
          },
          {
            "name": "Kouilou",
            "details": {
              "population": 481703
            }
          },
          {
            "name": "Lékoumou",
            "details": {
              "population": 579564
            }
          },
          {
            "name": "Likouala",
            "details": {
              "population": 473188
            }
          },
          {
            "name": "Niari",
            "details": {
              "population": 600956
            }
          },
          {
            "name": "Plateaux",
            "details": {
              "population": 473993
            }
          },
          {
            "name": "Pointe-Noire",
            "details": {
              "population": 486177
            }
          },
          {
            "name": "Pool",
            "details": {
              "population": 437689
            }
          },
          {
            "name": "Sangha",
            "details": {
              "population": 402685
            }
          }
        ],
        "details": {
          "population": 6100000,
          "language": "French",
          "leader": "President Denis Sassou Nguesso",
          "leaderSince": "1997-10-25",
          "previousLeader": "Pascal Lissouba"
        }
      },
      {
        "name": "Cote d'Ivoire (Republic of Côte d'Ivoire) / President Alassane Ouattara",
        "children": [
          {
            "name": "Abidjan",
            "details": {
              "population": 824043
            }
          },
          {
            "name": "Bas-Sassandra",
            "details": {
              "population": 814211
            }
          },
          {
            "name": "Comoé",
            "details": {
              "population": 614359
            }
          },
          {
            "name": "Denguélé",
            "details": {
              "population": 850614
            }
          },
          {
            "name": "Gôh-Djiboua",
            "details": {
              "population": 620779
            }
          },
          {
            "name": "Lacs",
            "details": {
              "population": 676842
            }
          },
          {
            "name": "Lagunes",
            "details": {
              "population": 615391
            }
          },
          {
            "name": "Montagnes",
            "details": {
              "population": 827325
            }
          },
          {
            "name": "Sassandra-Marahoué",
            "details": {
              "population": 749425
            }
          },
          {
            "name": "Savanes",
            "details": {
              "population": 813930
            }
          },
          {
            "name": "Vallée du Bandama",
            "details": {
              "population": 789207
            }
          },
          {
            "name": "Woroba",
            "details": {
              "population": 587279
            }
          },
          {
            "name": "Yamoussoukro",
            "details": {
              "population": 657425
            }
          },
          {
            "name": "Zanzan",
            "details": {
              "population": 559170
            }
          }
        ],
        "details": {
          "population": 10000000,
          "language": "French",
          "leader": "President Alassane Ouattara",
          "leaderSince": "2010-12-04",
          "previousLeader": "Laurent Gbagbo"
        }
      },
      {
        "name": "Djibouti (Republic of Djibouti) / President Ismaïl Omar Guelleh",
        "children": [
          {
            "name": "Ali Sabieh",
            "details": {
              "population": 181175
            }
          },
          {
            "name": "Arta",
            "details": {
              "population": 163873
            }
          },
          {
            "name": "Dikhil",
            "details": {
              "population": 167311
            }
          },
          {
            "name": "Djibouti",
            "details": {
              "population": 195304
            }
          },
          {
            "name": "Obock",
            "details": {
              "population": 183945
            }
          },
          {
            "name": "Tadjourah",
            "details": {
              "population": 208392
            }
          }
        ],
        "details": {
          "population": 1100000,
          "language": "Arabic, French",
          "leader": "President Ismaïl Omar Guelleh",
          "leaderSince": "1999-05-08",
          "previousLeader": "Hassan Gouled Aptidon"
        }
      },
      {
        "name": "Egypt (Arab Republic of Egypt) / President Abdel Fattah el-Sisi",
        "children": [
          {
            "name": "Alexandria",
            "details": {
              "population": 4784078
            }
          },
          {
            "name": "Aswan",
            "details": {
              "population": 4938140
            }
          },
          {
            "name": "Asyut",
            "details": {
              "population": 4678926
            }
          },
          {
            "name": "Beheira",
            "details": {
              "population": 3900619
            }
          },
          {
            "name": "Beni Suef",
            "details": {
              "population": 3464242
            }
          },
          {
            "name": "Cairo",
            "details": {
              "population": 4511652
            }
          },
          {
            "name": "Dakahlia",
            "details": {
              "population": 4894517
            }
          },
          {
            "name": "Damietta",
            "details": {
              "population": 3883405
            }
          },
          {
            "name": "Faiyum",
            "details": {
              "population": 4113302
            }
          },
          {
            "name": "Gharbia",
            "details": {
              "population": 4759845
            }
          },
          {
            "name": "Giza",
            "details": {
              "population": 4658523
            }
          },
          {
            "name": "Ismailia",
            "details": {
              "population": 4429028
            }
          },
          {
            "name": "Kafr El Sheikh",
            "details": {
              "population": 4477922
            }
          },
          {
            "name": "Luxor",
            "details": {
              "population": 4223886
            }
          },
          {
            "name": "Matrouh",
            "details": {
              "population": 4746715
            }
          },
          {
            "name": "Minya",
            "details": {
              "population": 4899691
            }
          },
          {
            "name": "Monufia",
            "details": {
              "population": 3354035
            }
          },
          {
            "name": "New Valley",
            "details": {
              "population": 4127747
            }
          },
          {
            "name": "North Sinai",
            "details": {
              "population": 3713935
            }
          },
          {
            "name": "Port Said",
            "details": {
              "population": 4120523
            }
          },
          {
            "name": "Qalyubia",
            "details": {
              "population": 3760690
            }
          },
          {
            "name": "Qena",
            "details": {
              "population": 4001750
            }
          },
          {
            "name": "Red Sea",
            "details": {
              "population": 4061357
            }
          },
          {
            "name": "Sharqia",
            "details": {
              "population": 4721035
            }
          },
          {
            "name": "Sohag",
            "details": {
              "population": 3987698
            }
          },
          {
            "name": "South Sinai",
            "details": {
              "population": 4638269
            }
          },
          {
            "name": "Suez",
            "details": {
              "population": 148470
            }
          }
        ],
        "details": {
          "population": 112000000,
          "language": "Arabic",
          "leader": "President Abdel Fattah el-Sisi",
          "leaderSince": "2014-06-08",
          "previousLeader": "Adly Mansour"
        }
      },
      {
        "name": "Equatorial Guinea (Republic of Equatorial Guinea) / President Teodoro Obiang Nguema Mbasogo",
        "children": [
          {
            "name": "Annobón",
            "details": {
              "population": 184105
            }
          },
          {
            "name": "Bioko Norte",
            "details": {
              "population": 211836
            }
          },
          {
            "name": "Bioko Sur",
            "details": {
              "population": 176527
            }
          },
          {
            "name": "Centro Sur",
            "details": {
              "population": 229043
            }
          },
          {
            "name": "Djibloho",
            "details": {
              "population": 232828
            }
          },
          {
            "name": "Kie-Ntem",
            "details": {
              "population": 194698
            }
          },
          {
            "name": "Litoral",
            "details": {
              "population": 240124
            }
          },
          {
            "name": "Wele-Nzas",
            "details": {
              "population": 230839
            }
          }
        ],
        "details": {
          "population": 1700000,
          "language": "Spanish, French, Portuguese",
          "leader": "President Teodoro Obiang Nguema Mbasogo",
          "leaderSince": "1979-08-03",
          "previousLeader": "Francisco Macías Nguema"
        }
      },
      {
        "name": "Eritrea (State of Eritrea) / President Isaias Afwerki",
        "children": [
          {
            "name": "Anseba",
            "details": {
              "population": 724212
            }
          },
          {
            "name": "Central",
            "details": {
              "population": 522414
            }
          },
          {
            "name": "Gash-Barka",
            "details": {
              "population": 511376
            }
          },
          {
            "name": "Northern Red Sea",
            "details": {
              "population": 654336
            }
          },
          {
            "name": "Southern",
            "details": {
              "population": 587780
            }
          },
          {
            "name": "Southern Red Sea",
            "details": {
              "population": 699882
            }
          }
        ],
        "details": {
          "population": 3700000,
          "language": "Tigrinya, Arabic, English",
          "leader": "President Isaias Afwerki",
          "leaderSince": "1993-05-24",
          "previousLeader": "None (First President)"
        }
      },
      {
        "name": "Ethiopia (Federal Democratic Republic of Ethiopia) / President Sahle-Work Zewde",
        "children": [
          {
            "name": "Addis Ababa",
            "details": {
              "population": 11320735
            }
          },
          {
            "name": "Afar",
            "details": {
              "population": 9714353
            }
          },
          {
            "name": "Amhara",
            "details": {
              "population": 9692283
            }
          },
          {
            "name": "Benishangul-Gumuz",
            "details": {
              "population": 11311581
            }
          },
          {
            "name": "Dire Dawa",
            "details": {
              "population": 8758992
            }
          },
          {
            "name": "Gambela",
            "details": {
              "population": 9038485
            }
          },
          {
            "name": "Harari",
            "details": {
              "population": 10055955
            }
          },
          {
            "name": "Oromia",
            "details": {
              "population": 9873886
            }
          },
          {
            "name": "Sidama",
            "details": {
              "population": 8510148
            }
          },
          {
            "name": "Somali",
            "details": {
              "population": 9083627
            }
          },
          {
            "name": "South West Ethiopia Peoples'",
            "details": {
              "population": 8017738
            }
          },
          {
            "name": "Southern Nations, Nationalities, and Peoples'",
            "details": {
              "population": 9756961
            }
          },
          {
            "name": "Tigray",
            "details": {
              "population": 10865256
            }
          }
        ],
        "details": {
          "population": 126000000,
          "language": "Amharic",
          "leader": "President Sahle-Work Zewde",
          "leaderSince": "2018-10-25",
          "previousLeader": "Mulatu Teshome"
        }
      },
      {
        "name": "Gambia (Republic of The Gambia) / President Adama Barrow",
        "children": [
          {
            "name": "Banjul",
            "details": {
              "population": 498944
            }
          },
          {
            "name": "Central River",
            "details": {
              "population": 370136
            }
          },
          {
            "name": "Lower River",
            "details": {
              "population": 484106
            }
          },
          {
            "name": "North Bank",
            "details": {
              "population": 495590
            }
          },
          {
            "name": "Upper River",
            "details": {
              "population": 501014
            }
          },
          {
            "name": "West Coast",
            "details": {
              "population": 350210
            }
          }
        ],
        "details": {
          "population": 2700000,
          "language": "English",
          "leader": "President Adama Barrow",
          "leaderSince": "2017-01-19",
          "previousLeader": "Yahya Jammeh"
        }
      },
      {
        "name": "Ghana (Republic of Ghana) / President Nana Akufo-Addo",
        "children": [
          {
            "name": "Ahafo",
            "details": {
              "population": 1740823
            }
          },
          {
            "name": "Ashanti",
            "details": {
              "population": 1773932
            }
          },
          {
            "name": "Bono",
            "details": {
              "population": 2165465
            }
          },
          {
            "name": "Bono East",
            "details": {
              "population": 1867088
            }
          },
          {
            "name": "Central",
            "details": {
              "population": 1922804
            }
          },
          {
            "name": "Eastern",
            "details": {
              "population": 1875194
            }
          },
          {
            "name": "Greater Accra",
            "details": {
              "population": 2366255
            }
          },
          {
            "name": "North East",
            "details": {
              "population": 1975979
            }
          },
          {
            "name": "Northern",
            "details": {
              "population": 2181587
            }
          },
          {
            "name": "Oti",
            "details": {
              "population": 2467030
            }
          },
          {
            "name": "Savannah",
            "details": {
              "population": 2159281
            }
          },
          {
            "name": "Upper East",
            "details": {
              "population": 2068297
            }
          },
          {
            "name": "Upper West",
            "details": {
              "population": 2208032
            }
          },
          {
            "name": "Volta",
            "details": {
              "population": 1906268
            }
          },
          {
            "name": "Western",
            "details": {
              "population": 2552872
            }
          },
          {
            "name": "Western North",
            "details": {
              "population": 2869093
            }
          }
        ],
        "details": {
          "population": 34100000,
          "language": "English",
          "leader": "President Nana Akufo-Addo",
          "leaderSince": "2017-01-07",
          "previousLeader": "John Mahama"
        }
      },
      {
        "name": "Guinea-Bissau (Republic of Guinea-Bissau) / President Umaro Sissoco Embaló",
        "children": [
          {
            "name": "Bafatá",
            "details": {
              "population": 278840
            }
          },
          {
            "name": "Biombo",
            "details": {
              "population": 222345
            }
          },
          {
            "name": "Bissau",
            "details": {
              "population": 199657
            }
          },
          {
            "name": "Bolama",
            "details": {
              "population": 278861
            }
          },
          {
            "name": "Cacheu",
            "details": {
              "population": 210570
            }
          },
          {
            "name": "Gabu",
            "details": {
              "population": 246872
            }
          },
          {
            "name": "Oio",
            "details": {
              "population": 189929
            }
          },
          {
            "name": "Quinara",
            "details": {
              "population": 226424
            }
          },
          {
            "name": "Tombali",
            "details": {
              "population": 246502
            }
          }
        ],
        "details": {
          "population": 2100000,
          "language": "Portuguese",
          "leader": "President Umaro Sissoco Embaló",
          "leaderSince": "2020-02-27",
          "previousLeader": "José Mário Vaz"
        }
      },
      {
        "name": "Kenya (Republic of Kenya) / President William Ruto",
        "children": [
          {
            "name": "Mombasa",
            "details": {
              "population": 1354382
            }
          },
          {
            "name": "Kwale",
            "details": {
              "population": 1367447
            }
          },
          {
            "name": "Kilifi",
            "details": {
              "population": 1388414
            }
          },
          {
            "name": "Tana River",
            "details": {
              "population": 1026986
            }
          },
          {
            "name": "Lamu",
            "details": {
              "population": 1012306
            }
          },
          {
            "name": "Taita-Taveta",
            "details": {
              "population": 1346961
            }
          },
          {
            "name": "Garissa",
            "details": {
              "population": 1206168
            }
          },
          {
            "name": "Wajir",
            "details": {
              "population": 1317570
            }
          },
          {
            "name": "Mandera",
            "details": {
              "population": 993676
            }
          },
          {
            "name": "Marsabit",
            "details": {
              "population": 1065588
            }
          },
          {
            "name": "Isiolo",
            "details": {
              "population": 1320141
            }
          },
          {
            "name": "Meru",
            "details": {
              "population": 1085321
            }
          },
          {
            "name": "Tharaka-Nithi",
            "details": {
              "population": 1277342
            }
          },
          {
            "name": "Embu",
            "details": {
              "population": 1330091
            }
          },
          {
            "name": "Kitui",
            "details": {
              "population": 1058150
            }
          },
          {
            "name": "Machakos",
            "details": {
              "population": 1384906
            }
          },
          {
            "name": "Makueni",
            "details": {
              "population": 1116566
            }
          },
          {
            "name": "Nyandarua",
            "details": {
              "population": 1242940
            }
          },
          {
            "name": "Nyeri",
            "details": {
              "population": 1269478
            }
          },
          {
            "name": "Kirinyaga",
            "details": {
              "population": 1147050
            }
          },
          {
            "name": "Murang'a",
            "details": {
              "population": 973855
            }
          },
          {
            "name": "Kiambu",
            "details": {
              "population": 1027894
            }
          },
          {
            "name": "Turkana",
            "details": {
              "population": 1318285
            }
          },
          {
            "name": "West Pokot",
            "details": {
              "population": 1265377
            }
          },
          {
            "name": "Samburu",
            "details": {
              "population": 1229993
            }
          },
          {
            "name": "Trans-Nzoia",
            "details": {
              "population": 1160126
            }
          },
          {
            "name": "Uasin Gishu",
            "details": {
              "population": 1056350
            }
          },
          {
            "name": "Elgeyo-Marakwet",
            "details": {
              "population": 1018044
            }
          },
          {
            "name": "Nandi",
            "details": {
              "population": 957939
            }
          },
          {
            "name": "Baringo",
            "details": {
              "population": 995670
            }
          },
          {
            "name": "Laikipia",
            "details": {
              "population": 1230354
            }
          },
          {
            "name": "Nakuru",
            "details": {
              "population": 1098609
            }
          },
          {
            "name": "Narok",
            "details": {
              "population": 1289508
            }
          },
          {
            "name": "Kajiado",
            "details": {
              "population": 1306649
            }
          },
          {
            "name": "Kericho",
            "details": {
              "population": 1133791
            }
          },
          {
            "name": "Bomet",
            "details": {
              "population": 1248689
            }
          },
          {
            "name": "Kakamega",
            "details": {
              "population": 1252448
            }
          },
          {
            "name": "Vihiga",
            "details": {
              "population": 963546
            }
          },
          {
            "name": "Bungoma",
            "details": {
              "population": 1344038
            }
          },
          {
            "name": "Busia",
            "details": {
              "population": 1126205
            }
          },
          {
            "name": "Siaya",
            "details": {
              "population": 1301663
            }
          },
          {
            "name": "Kisumu",
            "details": {
              "population": 1159180
            }
          },
          {
            "name": "Homa Bay",
            "details": {
              "population": 1003429
            }
          },
          {
            "name": "Migori",
            "details": {
              "population": 1278091
            }
          },
          {
            "name": "Kisii",
            "details": {
              "population": 1111583
            }
          },
          {
            "name": "Nyamira",
            "details": {
              "population": 968678
            }
          },
          {
            "name": "Nairobi",
            "details": {
              "population": 968523
            }
          }
        ],
        "details": {
          "population": 55100000,
          "language": "Swahili, English",
          "leader": "President William Ruto",
          "leaderSince": "2022-09-13",
          "previousLeader": "Uhuru Kenyatta"
        }
      },
      {
        "name": "Liberia (Republic of Liberia) / President Joseph Boakai",
        "children": [
          {
            "name": "Bomi",
            "details": {
              "population": 364690
            }
          },
          {
            "name": "Bong",
            "details": {
              "population": 408300
            }
          },
          {
            "name": "Gbarpolu",
            "details": {
              "population": 310157
            }
          },
          {
            "name": "Grand Bassa",
            "details": {
              "population": 349915
            }
          },
          {
            "name": "Grand Cape Mount",
            "details": {
              "population": 308966
            }
          },
          {
            "name": "Grand Gedeh",
            "details": {
              "population": 354147
            }
          },
          {
            "name": "Grand Kru",
            "details": {
              "population": 307625
            }
          },
          {
            "name": "Lofa",
            "details": {
              "population": 408996
            }
          },
          {
            "name": "Margibi",
            "details": {
              "population": 327125
            }
          },
          {
            "name": "Maryland",
            "details": {
              "population": 420701
            }
          },
          {
            "name": "Montserrado",
            "details": {
              "population": 419691
            }
          },
          {
            "name": "Nimba",
            "details": {
              "population": 318551
            }
          },
          {
            "name": "Rivercess",
            "details": {
              "population": 356531
            }
          },
          {
            "name": "River Gee",
            "details": {
              "population": 425224
            }
          },
          {
            "name": "Sinoe",
            "details": {
              "population": 319381
            }
          }
        ],
        "details": {
          "population": 5400000,
          "language": "English",
          "leader": "President Joseph Boakai",
          "leaderSince": "2024-01-22",
          "previousLeader": "George Weah"
        }
      },
      {
        "name": "Madagascar (Republic of Madagascar) / President Andry Rajoelina",
        "children": [
          {
            "name": "Diana",
            "details": {
              "population": 1226506
            }
          },
          {
            "name": "Sava",
            "details": {
              "population": 1497844
            }
          },
          {
            "name": "Itasy",
            "details": {
              "population": 1428079
            }
          },
          {
            "name": "Analamanga",
            "details": {
              "population": 1157116
            }
          },
          {
            "name": "Vakinankaratra",
            "details": {
              "population": 1087404
            }
          },
          {
            "name": "Bongolava",
            "details": {
              "population": 1133202
            }
          },
          {
            "name": "Sofia",
            "details": {
              "population": 1081465
            }
          },
          {
            "name": "Boeny",
            "details": {
              "population": 1410787
            }
          },
          {
            "name": "Betsiboka",
            "details": {
              "population": 1025836
            }
          },
          {
            "name": "Melaky",
            "details": {
              "population": 1217475
            }
          },
          {
            "name": "Alaotra-Mangoro",
            "details": {
              "population": 1355988
            }
          },
          {
            "name": "Atsinanana",
            "details": {
              "population": 1026848
            }
          },
          {
            "name": "Analanjirofo",
            "details": {
              "population": 1074174
            }
          },
          {
            "name": "Ambatosoa",
            "details": {
              "population": 1147950
            }
          },
          {
            "name": "Amoron'i Mania",
            "details": {
              "population": 1079837
            }
          },
          {
            "name": "Haute Matsiatra",
            "details": {
              "population": 1159692
            }
          },
          {
            "name": "Vatovavy",
            "details": {
              "population": 1453769
            }
          },
          {
            "name": "Fitovinany",
            "details": {
              "population": 1234427
            }
          },
          {
            "name": "Atsimo-Atsinanana",
            "details": {
              "population": 1276985
            }
          },
          {
            "name": "Ihorombe",
            "details": {
              "population": 1097332
            }
          },
          {
            "name": "Menabe",
            "details": {
              "population": 1049923
            }
          },
          {
            "name": "Atsimo-Andrefana",
            "details": {
              "population": 1420215
            }
          },
          {
            "name": "Androy",
            "details": {
              "population": 1128182
            }
          },
          {
            "name": "Anosy",
            "details": {
              "population": 2528964
            }
          }
        ],
        "details": {
          "population": 30300000,
          "language": "Malagasy, French",
          "leader": "President Andry Rajoelina",
          "leaderSince": "2019-01-19",
          "previousLeader": "Hery Rajaonarimampianina"
        }
      },
      {
        "name": "Malawi (Republic of Malawi) / President Lazarus Chakwera",
        "children": [
          {
            "name": "Balaka",
            "details": {
              "population": 662620
            }
          },
          {
            "name": "Blantyre",
            "details": {
              "population": 813129
            }
          },
          {
            "name": "Chikwawa",
            "details": {
              "population": 746121
            }
          },
          {
            "name": "Chiradzulu",
            "details": {
              "population": 853573
            }
          },
          {
            "name": "Chitipa",
            "details": {
              "population": 605160
            }
          },
          {
            "name": "Dedza",
            "details": {
              "population": 808776
            }
          },
          {
            "name": "Dowa",
            "details": {
              "population": 795585
            }
          },
          {
            "name": "Karonga",
            "details": {
              "population": 654202
            }
          },
          {
            "name": "Kasungu",
            "details": {
              "population": 772072
            }
          },
          {
            "name": "Likoma",
            "details": {
              "population": 650522
            }
          },
          {
            "name": "Lilongwe",
            "details": {
              "population": 749643
            }
          },
          {
            "name": "Machinga",
            "details": {
              "population": 610673
            }
          },
          {
            "name": "Mangochi",
            "details": {
              "population": 859357
            }
          },
          {
            "name": "Mchinji",
            "details": {
              "population": 600797
            }
          },
          {
            "name": "Mulanje",
            "details": {
              "population": 846149
            }
          },
          {
            "name": "Mwanza",
            "details": {
              "population": 890340
            }
          },
          {
            "name": "Mzimba",
            "details": {
              "population": 829888
            }
          },
          {
            "name": "Neno",
            "details": {
              "population": 624570
            }
          },
          {
            "name": "Nkhata Bay",
            "details": {
              "population": 863284
            }
          },
          {
            "name": "Nkhotakota",
            "details": {
              "population": 761528
            }
          },
          {
            "name": "Nsanje",
            "details": {
              "population": 835513
            }
          },
          {
            "name": "Ntcheu",
            "details": {
              "population": 872534
            }
          },
          {
            "name": "Ntchisi",
            "details": {
              "population": 615501
            }
          },
          {
            "name": "Phalombe",
            "details": {
              "population": 698133
            }
          },
          {
            "name": "Rumphi",
            "details": {
              "population": 763485
            }
          },
          {
            "name": "Salima",
            "details": {
              "population": 777314
            }
          },
          {
            "name": "Thyolo",
            "details": {
              "population": 771514
            }
          },
          {
            "name": "Zomba",
            "details": {
              "population": 568017
            }
          }
        ],
        "details": {
          "population": 20900000,
          "language": "English, Chichewa",
          "leader": "President Lazarus Chakwera",
          "leaderSince": "2020-06-28",
          "previousLeader": "Peter Mutharika"
        }
      },
      {
        "name": "Mauritania (Islamic Republic of Mauritania) / President Mohamed Ould Ghazouani",
        "children": [
          {
            "name": "Adrar",
            "details": {
              "population": 290793
            }
          },
          {
            "name": "Assaba",
            "details": {
              "population": 340104
            }
          },
          {
            "name": "Brakna",
            "details": {
              "population": 362188
            }
          },
          {
            "name": "Dakhlet Nouadhibou",
            "details": {
              "population": 363044
            }
          },
          {
            "name": "Gorgol",
            "details": {
              "population": 327464
            }
          },
          {
            "name": "Guidimaka",
            "details": {
              "population": 372869
            }
          },
          {
            "name": "Hodh Ech Chargui",
            "details": {
              "population": 283909
            }
          },
          {
            "name": "Hodh El Gharbi",
            "details": {
              "population": 283101
            }
          },
          {
            "name": "Inchiri",
            "details": {
              "population": 327624
            }
          },
          {
            "name": "Nouakchott-Nord",
            "details": {
              "population": 303489
            }
          },
          {
            "name": "Nouakchott-Ouest",
            "details": {
              "population": 359857
            }
          },
          {
            "name": "Nouakchott-Sud",
            "details": {
              "population": 364675
            }
          },
          {
            "name": "Tagant",
            "details": {
              "population": 274157
            }
          },
          {
            "name": "Tiris Zemmour",
            "details": {
              "population": 304791
            }
          },
          {
            "name": "Trarza",
            "details": {
              "population": 241935
            }
          }
        ],
        "details": {
          "population": 4800000,
          "language": "Arabic",
          "leader": "President Mohamed Ould Ghazouani",
          "leaderSince": "2019-08-01",
          "previousLeader": "Mohamed Ould Abdel Aziz"
        }
      },
      {
        "name": "Mauritius (Republic of Mauritius) / President Prithvirajsing Roopun",
        "children": [
          {
            "name": "Agaléga",
            "details": {
              "population": 102822
            }
          },
          {
            "name": "Black River",
            "details": {
              "population": 107361
            }
          },
          {
            "name": "Cargados Carajos",
            "details": {
              "population": 103201
            }
          },
          {
            "name": "Flacq",
            "details": {
              "population": 114828
            }
          },
          {
            "name": "Grand Port",
            "details": {
              "population": 129830
            }
          },
          {
            "name": "Moka",
            "details": {
              "population": 129397
            }
          },
          {
            "name": "Pamplemousses",
            "details": {
              "population": 106845
            }
          },
          {
            "name": "Plaines Wilhems",
            "details": {
              "population": 110063
            }
          },
          {
            "name": "Port Louis",
            "details": {
              "population": 96886
            }
          },
          {
            "name": "Rivière du Rempart",
            "details": {
              "population": 107538
            }
          },
          {
            "name": "Rodrigues",
            "details": {
              "population": 105648
            }
          },
          {
            "name": "Savanne",
            "details": {
              "population": 85581
            }
          }
        ],
        "details": {
          "population": 1300000,
          "language": "English",
          "leader": "President Prithvirajsing Roopun",
          "leaderSince": "2019-12-02",
          "previousLeader": "Barlen Vyapoory"
        }
      },
      {
        "name": "Mozambique (Republic of Mozambique) / President Filipe Nyusi",
        "children": [
          {
            "name": "Cabo Delgado",
            "details": {
              "population": 2518177
            }
          },
          {
            "name": "Gaza",
            "details": {
              "population": 2628860
            }
          },
          {
            "name": "Inhambane",
            "details": {
              "population": 3398676
            }
          },
          {
            "name": "Manica",
            "details": {
              "population": 2796766
            }
          },
          {
            "name": "Maputo Province",
            "details": {
              "population": 2738308
            }
          },
          {
            "name": "Maputo City",
            "details": {
              "population": 2483564
            }
          },
          {
            "name": "Nampula",
            "details": {
              "population": 3502800
            }
          },
          {
            "name": "Niassa",
            "details": {
              "population": 2621858
            }
          },
          {
            "name": "Sofala",
            "details": {
              "population": 3366834
            }
          },
          {
            "name": "Tete",
            "details": {
              "population": 3552247
            }
          },
          {
            "name": "Zambézia",
            "details": {
              "population": 4191910
            }
          }
        ],
        "details": {
          "population": 33800000,
          "language": "Portuguese",
          "leader": "President Filipe Nyusi",
          "leaderSince": "2015-01-15",
          "previousLeader": "Armando Guebuza"
        }
      },
      {
        "name": "Namibia (Republic of Namibia) / President Nangolo Mbumba",
        "children": [
          {
            "name": "Erongo",
            "details": {
              "population": 150491
            }
          },
          {
            "name": "Hardap",
            "details": {
              "population": 185830
            }
          },
          {
            "name": "Kavango East",
            "details": {
              "population": 192694
            }
          },
          {
            "name": "Kavango West",
            "details": {
              "population": 200709
            }
          },
          {
            "name": "||Kharas",
            "details": {
              "population": 221239
            }
          },
          {
            "name": "Khomas",
            "details": {
              "population": 160979
            }
          },
          {
            "name": "Kunene",
            "details": {
              "population": 150385
            }
          },
          {
            "name": "Ohangwena",
            "details": {
              "population": 212723
            }
          },
          {
            "name": "Omaheke",
            "details": {
              "population": 166112
            }
          },
          {
            "name": "Omusati",
            "details": {
              "population": 222045
            }
          },
          {
            "name": "Oshana",
            "details": {
              "population": 189663
            }
          },
          {
            "name": "Oshikoto",
            "details": {
              "population": 173116
            }
          },
          {
            "name": "Otjozondjupa",
            "details": {
              "population": 198225
            }
          },
          {
            "name": "Zambezi",
            "details": {
              "population": 175789
            }
          }
        ],
        "details": {
          "population": 2600000,
          "language": "English",
          "leader": "President Nangolo Mbumba",
          "leaderSince": "2024-02-04",
          "previousLeader": "Hage Geingob"
        }
      },
      {
        "name": "Nigeria (Federal Republic of Nigeria) / President Bola Tinubu",
        "children": [
          {
            "name": "Abia",
            "details": {
              "population": 6148376
            }
          },
          {
            "name": "Adamawa",
            "details": {
              "population": 5438260
            }
          },
          {
            "name": "Akwa Ibom",
            "details": {
              "population": 5940498
            }
          },
          {
            "name": "Anambra",
            "details": {
              "population": 5775105
            }
          },
          {
            "name": "Bauchi",
            "details": {
              "population": 6529185
            }
          },
          {
            "name": "Bayelsa",
            "details": {
              "population": 5120103
            }
          },
          {
            "name": "Benue",
            "details": {
              "population": 6597601
            }
          },
          {
            "name": "Borno",
            "details": {
              "population": 6423174
            }
          },
          {
            "name": "Cross River",
            "details": {
              "population": 6509703
            }
          },
          {
            "name": "Delta",
            "details": {
              "population": 6258238
            }
          },
          {
            "name": "Ebonyi",
            "details": {
              "population": 5378758
            }
          },
          {
            "name": "Edo",
            "details": {
              "population": 7147609
            }
          },
          {
            "name": "Ekiti",
            "details": {
              "population": 7218013
            }
          },
          {
            "name": "Enugu",
            "details": {
              "population": 6754901
            }
          },
          {
            "name": "FCT",
            "details": {
              "population": 5576733
            }
          },
          {
            "name": "Gombe",
            "details": {
              "population": 6793615
            }
          },
          {
            "name": "Imo",
            "details": {
              "population": 5700916
            }
          },
          {
            "name": "Jigawa",
            "details": {
              "population": 6215508
            }
          },
          {
            "name": "Kaduna",
            "details": {
              "population": 5777566
            }
          },
          {
            "name": "Kano",
            "details": {
              "population": 5395200
            }
          },
          {
            "name": "Katsina",
            "details": {
              "population": 6640805
            }
          },
          {
            "name": "Kebbi",
            "details": {
              "population": 5608205
            }
          },
          {
            "name": "Kogi",
            "details": {
              "population": 5170290
            }
          },
          {
            "name": "Kwara",
            "details": {
              "population": 7084165
            }
          },
          {
            "name": "Lagos",
            "details": {
              "population": 6455054
            }
          },
          {
            "name": "Nasarawa",
            "details": {
              "population": 5594535
            }
          },
          {
            "name": "Niger",
            "details": {
              "population": 5556554
            }
          },
          {
            "name": "Ogun",
            "details": {
              "population": 5693630
            }
          },
          {
            "name": "Ondo",
            "details": {
              "population": 5053605
            }
          },
          {
            "name": "Osun",
            "details": {
              "population": 6086183
            }
          },
          {
            "name": "Oyo",
            "details": {
              "population": 6534924
            }
          },
          {
            "name": "Plateau",
            "details": {
              "population": 6492293
            }
          },
          {
            "name": "Rivers",
            "details": {
              "population": 5688664
            }
          },
          {
            "name": "Sokoto",
            "details": {
              "population": 5820098
            }
          },
          {
            "name": "Taraba",
            "details": {
              "population": 5794602
            }
          },
          {
            "name": "Yobe",
            "details": {
              "population": 5165172
            }
          },
          {
            "name": "Zamfara",
            "details": {
              "population": 5862159
            }
          }
        ],
        "details": {
          "population": 223000000,
          "language": "English",
          "leader": "President Bola Tinubu",
          "leaderSince": "2023-05-29",
          "previousLeader": "Muhammadu Buhari"
        }
      },
      {
        "name": "Rwanda (Republic of Rwanda) / President Paul Kagame",
        "children": [
          {
            "name": "Kigali",
            "details": {
              "population": 2251263
            }
          },
          {
            "name": "Northern",
            "details": {
              "population": 2374851
            }
          },
          {
            "name": "Southern",
            "details": {
              "population": 3114559
            }
          },
          {
            "name": "Eastern",
            "details": {
              "population": 3213954
            }
          },
          {
            "name": "Western",
            "details": {
              "population": 3045373
            }
          }
        ],
        "details": {
          "population": 14000000,
          "language": "Kinyarwanda, English, French, Swahili",
          "leader": "President Paul Kagame",
          "leaderSince": "2000-04-22",
          "previousLeader": "Pasteur Bizimungu"
        }
      },
      {
        "name": "Sao Tome and Principe (Democratic Republic of São Tomé and Príncipe) / President Carlos Vila Nova",
        "children": [
          {
            "name": "Água Grande",
            "details": {
              "population": 32143
            }
          },
          {
            "name": "Cantagalo",
            "details": {
              "population": 32394
            }
          },
          {
            "name": "Caué",
            "details": {
              "population": 25863
            }
          },
          {
            "name": "Lembá",
            "details": {
              "population": 30488
            }
          },
          {
            "name": "Lobata",
            "details": {
              "population": 34000
            }
          },
          {
            "name": "Mé-Zóchi",
            "details": {
              "population": 25161
            }
          },
          {
            "name": "Príncipe",
            "details": {
              "population": 19951
            }
          }
        ],
        "details": {
          "population": 200000,
          "language": "Portuguese",
          "leader": "President Carlos Vila Nova",
          "leaderSince": "2021-10-02",
          "previousLeader": "Evaristo Carvalho"
        }
      },
      {
        "name": "Senegal (Republic of Senegal) / President Bassirou Diomaye Faye",
        "children": [
          {
            "name": "Dakar",
            "details": {
              "population": 1106730
            }
          },
          {
            "name": "Diourbel",
            "details": {
              "population": 1100626
            }
          },
          {
            "name": "Fatick",
            "details": {
              "population": 1102589
            }
          },
          {
            "name": "Kaffrine",
            "details": {
              "population": 1171876
            }
          },
          {
            "name": "Kaolack",
            "details": {
              "population": 1293976
            }
          },
          {
            "name": "Kédougou",
            "details": {
              "population": 1288981
            }
          },
          {
            "name": "Kolda",
            "details": {
              "population": 1485816
            }
          },
          {
            "name": "Louga",
            "details": {
              "population": 1482127
            }
          },
          {
            "name": "Matam",
            "details": {
              "population": 1068034
            }
          },
          {
            "name": "Saint-Louis",
            "details": {
              "population": 1113285
            }
          },
          {
            "name": "Sédhiou",
            "details": {
              "population": 1057435
            }
          },
          {
            "name": "Tambacounda",
            "details": {
              "population": 1082487
            }
          },
          {
            "name": "Thiès",
            "details": {
              "population": 1381238
            }
          },
          {
            "name": "Ziguinchor",
            "details": {
              "population": 1964800
            }
          }
        ],
        "details": {
          "population": 17700000,
          "language": "French",
          "leader": "President Bassirou Diomaye Faye",
          "leaderSince": "2024-04-02",
          "previousLeader": "Macky Sall"
        }
      },
      {
        "name": "Seychelles (Republic of Seychelles) / President Wavel Ramkalawan",
        "children": [
          {
            "name": "Anse aux Pins",
            "details": {
              "population": 4630
            }
          },
          {
            "name": "Anse Boileau",
            "details": {
              "population": 3871
            }
          },
          {
            "name": "Anse Etoile",
            "details": {
              "population": 3501
            }
          },
          {
            "name": "Anse Royale",
            "details": {
              "population": 4878
            }
          },
          {
            "name": "Au Cap",
            "details": {
              "population": 4710
            }
          },
          {
            "name": "Baie Lazare",
            "details": {
              "population": 3894
            }
          },
          {
            "name": "Baie Sainte Anne",
            "details": {
              "population": 4954
            }
          },
          {
            "name": "Beau Vallon",
            "details": {
              "population": 4467
            }
          },
          {
            "name": "Bel Air",
            "details": {
              "population": 4635
            }
          },
          {
            "name": "Bel Ombre",
            "details": {
              "population": 4212
            }
          },
          {
            "name": "Cascade",
            "details": {
              "population": 4476
            }
          },
          {
            "name": "Glacis",
            "details": {
              "population": 3504
            }
          },
          {
            "name": "Grand Anse",
            "details": {
              "population": 5033
            }
          },
          {
            "name": "La Digue and Inner Islands",
            "details": {
              "population": 5149
            }
          },
          {
            "name": "Les Mamelles",
            "details": {
              "population": 3966
            }
          },
          {
            "name": "Mont Buxton",
            "details": {
              "population": 3607
            }
          },
          {
            "name": "Mont Fleuri",
            "details": {
              "population": 4251
            }
          },
          {
            "name": "Plaisance",
            "details": {
              "population": 4053
            }
          },
          {
            "name": "Pointe La Rue",
            "details": {
              "population": 4227
            }
          },
          {
            "name": "Port Glaud",
            "details": {
              "population": 4169
            }
          },
          {
            "name": "Roche Caiman",
            "details": {
              "population": 3928
            }
          },
          {
            "name": "Saint Louis",
            "details": {
              "population": 5077
            }
          },
          {
            "name": "Takamaka",
            "details": {
              "population": 4808
            }
          }
        ],
        "details": {
          "population": 100000,
          "language": "English, French, Seychellois Creole",
          "leader": "President Wavel Ramkalawan",
          "leaderSince": "2020-10-26",
          "previousLeader": "Danny Faure"
        }
      },
      {
        "name": "Sierra Leone (Republic of Sierra Leone) / President Julius Maada Bio",
        "children": [
          {
            "name": "Eastern",
            "details": {
              "population": 1516819
            }
          },
          {
            "name": "Northern",
            "details": {
              "population": 2034679
            }
          },
          {
            "name": "North Western",
            "details": {
              "population": 1946771
            }
          },
          {
            "name": "Southern",
            "details": {
              "population": 1956195
            }
          },
          {
            "name": "Western Area",
            "details": {
              "population": 1245536
            }
          }
        ],
        "details": {
          "population": 8700000,
          "language": "English",
          "leader": "President Julius Maada Bio",
          "leaderSince": "2018-04-04",
          "previousLeader": "Ernest Bai Koroma"
        }
      },
      {
        "name": "Somalia (Federal Republic of Somalia) / President Hassan Sheikh Mohamud",
        "children": [
          {
            "name": "Awdal",
            "details": {
              "population": 842542
            }
          },
          {
            "name": "Bakool",
            "details": {
              "population": 1154823
            }
          },
          {
            "name": "Banaadir",
            "details": {
              "population": 1146229
            }
          },
          {
            "name": "Bari",
            "details": {
              "population": 1170390
            }
          },
          {
            "name": "Bay",
            "details": {
              "population": 1076626
            }
          },
          {
            "name": "Galguduud",
            "details": {
              "population": 1061313
            }
          },
          {
            "name": "Gedo",
            "details": {
              "population": 1116051
            }
          },
          {
            "name": "Hiiraan",
            "details": {
              "population": 923264
            }
          },
          {
            "name": "Lower Juba",
            "details": {
              "population": 816615
            }
          },
          {
            "name": "Lower Shabelle",
            "details": {
              "population": 890045
            }
          },
          {
            "name": "Middle Juba",
            "details": {
              "population": 1162763
            }
          },
          {
            "name": "Middle Shabelle",
            "details": {
              "population": 1151995
            }
          },
          {
            "name": "Mudug",
            "details": {
              "population": 913967
            }
          },
          {
            "name": "Nugaal",
            "details": {
              "population": 1193569
            }
          },
          {
            "name": "Sanaag",
            "details": {
              "population": 931204
            }
          },
          {
            "name": "Sool",
            "details": {
              "population": 1154604
            }
          },
          {
            "name": "Togdheer",
            "details": {
              "population": 1129807
            }
          },
          {
            "name": "Woqooyi Galbeed",
            "details": {
              "population": 264193
            }
          }
        ],
        "details": {
          "population": 18100000,
          "language": "Somali, Arabic",
          "leader": "President Hassan Sheikh Mohamud",
          "leaderSince": "2022-05-23",
          "previousLeader": "Mohamed Abdullahi Mohamed"
        }
      },
      {
        "name": "South Africa (Republic of South Africa) / President Cyril Ramaphosa",
        "children": [
          {
            "name": "Eastern Cape",
            "details": {
              "population": 7324296
            }
          },
          {
            "name": "Free State",
            "details": {
              "population": 7171817
            }
          },
          {
            "name": "Gauteng",
            "details": {
              "population": 6921062
            }
          },
          {
            "name": "KwaZulu-Natal",
            "details": {
              "population": 7527136
            }
          },
          {
            "name": "Limpopo",
            "details": {
              "population": 5699858
            }
          },
          {
            "name": "Mpumalanga",
            "details": {
              "population": 7648626
            }
          },
          {
            "name": "North West",
            "details": {
              "population": 5582346
            }
          },
          {
            "name": "Northern Cape",
            "details": {
              "population": 6367173
            }
          },
          {
            "name": "Western Cape",
            "details": {
              "population": 6157686
            }
          }
        ],
        "details": {
          "population": 60400000,
          "language": "12 Official Languages",
          "leader": "President Cyril Ramaphosa",
          "leaderSince": "2018-02-15",
          "previousLeader": "Jacob Zuma"
        }
      },
      {
        "name": "South Sudan (Republic of South Sudan) / President Salva Kiir Mayardit",
        "children": [
          {
            "name": "Central Equatoria",
            "details": {
              "population": 994520
            }
          },
          {
            "name": "Eastern Equatoria",
            "details": {
              "population": 1030063
            }
          },
          {
            "name": "Jonglei",
            "details": {
              "population": 1244303
            }
          },
          {
            "name": "Lakes",
            "details": {
              "population": 1110781
            }
          },
          {
            "name": "Northern Bahr el Ghazal",
            "details": {
              "population": 882901
            }
          },
          {
            "name": "Unity",
            "details": {
              "population": 1201322
            }
          },
          {
            "name": "Upper Nile",
            "details": {
              "population": 1160751
            }
          },
          {
            "name": "Warrap",
            "details": {
              "population": 966047
            }
          },
          {
            "name": "Western Bahr el Ghazal",
            "details": {
              "population": 1074730
            }
          },
          {
            "name": "Western Equatoria",
            "details": {
              "population": 1334582
            }
          }
        ],
        "details": {
          "population": 11000000,
          "language": "English",
          "leader": "President Salva Kiir Mayardit",
          "leaderSince": "2011-07-09",
          "previousLeader": "None (First President)"
        }
      },
      {
        "name": "Tanzania (United Republic of Tanzania) / President Samia Suluhu Hassan",
        "children": [
          {
            "name": "Arusha",
            "details": {
              "population": 2601245
            }
          },
          {
            "name": "Dar es Salaam",
            "details": {
              "population": 2554352
            }
          },
          {
            "name": "Dodoma",
            "details": {
              "population": 2144384
            }
          },
          {
            "name": "Geita",
            "details": {
              "population": 2296883
            }
          },
          {
            "name": "Iringa",
            "details": {
              "population": 1780981
            }
          },
          {
            "name": "Kagera",
            "details": {
              "population": 2297524
            }
          },
          {
            "name": "Katavi",
            "details": {
              "population": 2189929
            }
          },
          {
            "name": "Kigoma",
            "details": {
              "population": 2569394
            }
          },
          {
            "name": "Kilimanjaro",
            "details": {
              "population": 2231727
            }
          },
          {
            "name": "Lindi",
            "details": {
              "population": 2223907
            }
          },
          {
            "name": "Manyara",
            "details": {
              "population": 1937599
            }
          },
          {
            "name": "Mara",
            "details": {
              "population": 1990437
            }
          },
          {
            "name": "Mbeya",
            "details": {
              "population": 2308600
            }
          },
          {
            "name": "Morogoro",
            "details": {
              "population": 2098951
            }
          },
          {
            "name": "Mtwara",
            "details": {
              "population": 2016005
            }
          },
          {
            "name": "Mwanza",
            "details": {
              "population": 2498586
            }
          },
          {
            "name": "Njombe",
            "details": {
              "population": 1953170
            }
          },
          {
            "name": "Pemba North",
            "details": {
              "population": 1972891
            }
          },
          {
            "name": "Pemba South",
            "details": {
              "population": 2490174
            }
          },
          {
            "name": "Pwani",
            "details": {
              "population": 2213707
            }
          },
          {
            "name": "Rukwa",
            "details": {
              "population": 2121686
            }
          },
          {
            "name": "Ruvuma",
            "details": {
              "population": 2071832
            }
          },
          {
            "name": "Shinyanga",
            "details": {
              "population": 2109606
            }
          },
          {
            "name": "Simiyu",
            "details": {
              "population": 2318901
            }
          },
          {
            "name": "Singida",
            "details": {
              "population": 2209704
            }
          },
          {
            "name": "Songwe",
            "details": {
              "population": 2266848
            }
          },
          {
            "name": "Tabora",
            "details": {
              "population": 2304314
            }
          },
          {
            "name": "Tanga",
            "details": {
              "population": 1868806
            }
          },
          {
            "name": "Zanzibar North",
            "details": {
              "population": 2093177
            }
          },
          {
            "name": "Zanzibar South",
            "details": {
              "population": 1807088
            }
          },
          {
            "name": "Zanzibar Urban/West",
            "details": {
              "population": 1857592
            }
          }
        ],
        "details": {
          "population": 67400000,
          "language": "Swahili, English",
          "leader": "President Samia Suluhu Hassan",
          "leaderSince": "2021-03-19",
          "previousLeader": "John Magufuli"
        }
      },
      {
        "name": "Togo (Togolese Republic) / President Faure Gnassingbé",
        "children": [
          {
            "name": "Centrale",
            "details": {
              "population": 1677577
            }
          },
          {
            "name": "Kara",
            "details": {
              "population": 1564208
            }
          },
          {
            "name": "Maritime",
            "details": {
              "population": 1842939
            }
          },
          {
            "name": "Plateaux",
            "details": {
              "population": 1668120
            }
          },
          {
            "name": "Savanes",
            "details": {
              "population": 2247156
            }
          }
        ],
        "details": {
          "population": 9000000,
          "language": "French",
          "leader": "President Faure Gnassingbé",
          "leaderSince": "2005-05-04",
          "previousLeader": "Gnassingbé Eyadéma"
        }
      },
      {
        "name": "Tunisia (Republic of Tunisia) / President Kais Saied",
        "children": [
          {
            "name": "Ariana",
            "details": {
              "population": 503685
            }
          },
          {
            "name": "Béja",
            "details": {
              "population": 439476
            }
          },
          {
            "name": "Ben Arous",
            "details": {
              "population": 428970
            }
          },
          {
            "name": "Bizerte",
            "details": {
              "population": 422799
            }
          },
          {
            "name": "Gabès",
            "details": {
              "population": 613661
            }
          },
          {
            "name": "Gafsa",
            "details": {
              "population": 555800
            }
          },
          {
            "name": "Jendouba",
            "details": {
              "population": 426329
            }
          },
          {
            "name": "Kairouan",
            "details": {
              "population": 582858
            }
          },
          {
            "name": "Kasserine",
            "details": {
              "population": 468840
            }
          },
          {
            "name": "Kebili",
            "details": {
              "population": 536694
            }
          },
          {
            "name": "Kef",
            "details": {
              "population": 583631
            }
          },
          {
            "name": "Mahdia",
            "details": {
              "population": 485446
            }
          },
          {
            "name": "Manouba",
            "details": {
              "population": 573614
            }
          },
          {
            "name": "Medenine",
            "details": {
              "population": 494640
            }
          },
          {
            "name": "Monastir",
            "details": {
              "population": 565619
            }
          },
          {
            "name": "Nabeul",
            "details": {
              "population": 504186
            }
          },
          {
            "name": "Sfax",
            "details": {
              "population": 475095
            }
          },
          {
            "name": "Sidi Bouzid",
            "details": {
              "population": 615621
            }
          },
          {
            "name": "Siliana",
            "details": {
              "population": 458306
            }
          },
          {
            "name": "Sousse",
            "details": {
              "population": 431458
            }
          },
          {
            "name": "Tataouine",
            "details": {
              "population": 515623
            }
          },
          {
            "name": "Tozeur",
            "details": {
              "population": 424317
            }
          },
          {
            "name": "Tunis",
            "details": {
              "population": 441842
            }
          },
          {
            "name": "Zaghouan",
            "details": {
              "population": 851490
            }
          }
        ],
        "details": {
          "population": 12400000,
          "language": "Arabic",
          "leader": "President Kais Saied",
          "leaderSince": "2019-10-23",
          "previousLeader": "Mohamed Ennaceur"
        }
      },
      {
        "name": "Uganda (Republic of Uganda) / President Yoweri Museveni",
        "children": [
          {
            "name": "Central",
            "details": {
              "population": 11297620
            }
          },
          {
            "name": "Eastern",
            "details": {
              "population": 12354948
            }
          },
          {
            "name": "Northern",
            "details": {
              "population": 12355157
            }
          },
          {
            "name": "Western",
            "details": {
              "population": 12492275
            }
          }
        ],
        "details": {
          "population": 48500000,
          "language": "English, Swahili",
          "leader": "President Yoweri Museveni",
          "leaderSince": "1986-01-29",
          "previousLeader": "Tito Okello"
        }
      },
      {
        "name": "Zambia (Republic of Zambia) / President Hakainde Hichilema",
        "children": [
          {
            "name": "Lusaka",
            "children": [
              {
                "name": "Lusaka",
                "children": [
                  {
                    "name": "Lusaka Central",
                    "children": [
                      {
                        "name": "Silwizya",
                        "children": [
                          {
                            "name": "Rhodes Park",
                            "details": {
                              "phone": "+260979159587",
                              "email": "system@neuralstate.local",
                              "nrc": "372907/82/1",
                              "population": 18068
                            }
                          },
                          {
                            "name": "Ridgeway",
                            "details": {
                              "population": 22163
                            }
                          }
                        ],
                        "details": {
                          "population": 40231
                        }
                      },
                      {
                        "name": "Lubwa",
                        "children": [
                          {
                            "name": "Longacres",
                            "details": {
                              "population": 16825
                            }
                          },
                          {
                            "name": "State Lodge",
                            "details": {
                              "population": 23721
                            }
                          }
                        ],
                        "details": {
                          "population": 40546
                        }
                      },
                      {
                        "name": "Independence",
                        "children": [
                          {
                            "name": "Woodlands",
                            "details": {
                              "population": 14623
                            }
                          },
                          {
                            "name": "Kabulonga",
                            "details": {
                              "population": 9853
                            }
                          }
                        ],
                        "details": {
                          "population": 24476
                        }
                      }
                    ],
                    "details": {
                      "population": 105253
                    }
                  },
                  {
                    "name": "Munali",
                    "children": [
                      {
                        "name": "Mtendere",
                        "children": [
                          {
                            "name": "Mtendere East",
                            "details": {
                              "population": 27135
                            }
                          },
                          {
                            "name": "Mtendere West",
                            "details": {
                              "population": 19377
                            }
                          }
                        ],
                        "details": {
                          "population": 46512
                        }
                      },
                      {
                        "name": "Kalingalinga",
                        "children": [
                          {
                            "name": "Section A",
                            "details": {
                              "population": 28054
                            }
                          },
                          {
                            "name": "Section B",
                            "details": {
                              "population": 39525
                            }
                          }
                        ],
                        "details": {
                          "population": 67579
                        }
                      }
                    ],
                    "details": {
                      "population": 114091
                    }
                  },
                  {
                    "name": "Kabwata",
                    "children": [
                      {
                        "name": "Kamulanga",
                        "children": [
                          {
                            "name": "Kamwala",
                            "details": {
                              "population": 23719
                            }
                          },
                          {
                            "name": "Kamwala South",
                            "details": {
                              "population": 19704
                            }
                          }
                        ],
                        "details": {
                          "population": 43423
                        }
                      },
                      {
                        "name": "Chilenje",
                        "children": [
                          {
                            "name": "Chilenje South",
                            "details": {
                              "population": 19050
                            }
                          },
                          {
                            "name": "Woodlands Ext",
                            "details": {
                              "population": 14420
                            }
                          }
                        ],
                        "details": {
                          "population": 33470
                        }
                      }
                    ],
                    "details": {
                      "population": 76893
                    }
                  }
                ],
                "details": {
                  "population": 296237
                }
              },
              {
                "name": "Chongwe",
                "children": [
                  {
                    "name": "Chongwe",
                    "children": [
                      {
                        "name": "Chalimbana",
                        "children": [
                          {
                            "name": "Chalimbana Village",
                            "details": {
                              "population": 174469
                            }
                          }
                        ],
                        "details": {
                          "population": 174469
                        }
                      },
                      {
                        "name": "Kanakantapa",
                        "children": [
                          {
                            "name": "Kanakantapa Resettlement",
                            "details": {
                              "population": 201073
                            }
                          }
                        ],
                        "details": {
                          "population": 201073
                        }
                      }
                    ],
                    "details": {
                      "population": 375542
                    }
                  }
                ],
                "details": {
                  "population": 375542
                }
              },
              {
                "name": "Kafue",
                "details": {
                  "population": 314834
                }
              },
              {
                "name": "Chilanga",
                "details": {
                  "population": 389384
                }
              },
              {
                "name": "Rufunsa",
                "details": {
                  "population": 360538
                }
              },
              {
                "name": "Luangwa",
                "details": {
                  "population": 410843
                }
              },
              {
                "name": "Chirundu",
                "details": {
                  "population": 290952
                }
              }
            ],
            "details": {
              "population": 2438330
            }
          },
          {
            "name": "Copperbelt",
            "children": [
              {
                "name": "Ndola",
                "details": {
                  "population": 228215
                }
              },
              {
                "name": "Kitwe",
                "details": {
                  "population": 221958
                }
              },
              {
                "name": "Chingola",
                "details": {
                  "population": 263729
                }
              },
              {
                "name": "Mufulira",
                "details": {
                  "population": 210599
                }
              },
              {
                "name": "Luanshya",
                "details": {
                  "population": 213736
                }
              },
              {
                "name": "Kalulushi",
                "details": {
                  "population": 246925
                }
              },
              {
                "name": "Chililabombwe",
                "details": {
                  "population": 189862
                }
              },
              {
                "name": "Lufwanyama",
                "details": {
                  "population": 269224
                }
              },
              {
                "name": "Mpongwe",
                "details": {
                  "population": 235563
                }
              },
              {
                "name": "Masaiti",
                "details": {
                  "population": 265042
                }
              }
            ],
            "details": {
              "population": 2344853
            }
          },
          {
            "name": "Central",
            "children": [
              {
                "name": "Kabwe",
                "details": {
                  "population": 198986
                }
              },
              {
                "name": "Chibombo",
                "details": {
                  "population": 231823
                }
              },
              {
                "name": "Chisamba",
                "details": {
                  "population": 170088
                }
              },
              {
                "name": "Chitambo",
                "details": {
                  "population": 181355
                }
              },
              {
                "name": "Itezhi-Tezhi",
                "details": {
                  "population": 236263
                }
              },
              {
                "name": "Kapiri Mposhi",
                "details": {
                  "population": 209603
                }
              },
              {
                "name": "Luano",
                "details": {
                  "population": 248108
                }
              },
              {
                "name": "Mkushi",
                "details": {
                  "population": 241287
                }
              },
              {
                "name": "Mumbwa",
                "details": {
                  "population": 181552
                }
              },
              {
                "name": "Ngabwe",
                "details": {
                  "population": 173236
                }
              },
              {
                "name": "Shibuyunji",
                "details": {
                  "population": 255384
                }
              }
            ],
            "details": {
              "population": 2327685
            }
          },
          {
            "name": "Southern",
            "children": [
              {
                "name": "Choma",
                "details": {
                  "population": 137323
                }
              },
              {
                "name": "Livingstone",
                "details": {
                  "population": 175485
                }
              },
              {
                "name": "Mazabuka",
                "details": {
                  "population": 168461
                }
              },
              {
                "name": "Monze",
                "details": {
                  "population": 147879
                }
              },
              {
                "name": "Kalomo",
                "details": {
                  "population": 140570
                }
              },
              {
                "name": "Zimba",
                "details": {
                  "population": 148898
                }
              },
              {
                "name": "Pemba",
                "details": {
                  "population": 137563
                }
              },
              {
                "name": "Namwala",
                "details": {
                  "population": 134411
                }
              },
              {
                "name": "Siavonga",
                "details": {
                  "population": 161940
                }
              },
              {
                "name": "Sinazongwe",
                "details": {
                  "population": 149380
                }
              },
              {
                "name": "Gwembe",
                "details": {
                  "population": 143662
                }
              },
              {
                "name": "Chikankata",
                "details": {
                  "population": 127919
                }
              },
              {
                "name": "Kazungula",
                "details": {
                  "population": 276681
                }
              }
            ],
            "details": {
              "population": 2050172
            }
          },
          {
            "name": "Eastern",
            "children": [
              {
                "name": "Chipata",
                "details": {
                  "population": 158400
                }
              },
              {
                "name": "Petauke",
                "details": {
                  "population": 148610
                }
              },
              {
                "name": "Katete",
                "details": {
                  "population": 173132
                }
              },
              {
                "name": "Lundazi",
                "details": {
                  "population": 174910
                }
              },
              {
                "name": "Nyimba",
                "details": {
                  "population": 176485
                }
              },
              {
                "name": "Chadiza",
                "details": {
                  "population": 123489
                }
              },
              {
                "name": "Chama",
                "details": {
                  "population": 131593
                }
              },
              {
                "name": "Mambwe",
                "details": {
                  "population": 154764
                }
              },
              {
                "name": "Vubwi",
                "details": {
                  "population": 137683
                }
              },
              {
                "name": "Sinda",
                "details": {
                  "population": 168573
                }
              },
              {
                "name": "Chipangali",
                "details": {
                  "population": 183438
                }
              },
              {
                "name": "Kasenengwa",
                "details": {
                  "population": 183173
                }
              },
              {
                "name": "Lumezi",
                "details": {
                  "population": 143962
                }
              },
              {
                "name": "Chasefu",
                "details": {
                  "population": 88220
                }
              }
            ],
            "details": {
              "population": 2146432
            }
          },
          {
            "name": "Northern",
            "children": [
              {
                "name": "Kasama",
                "details": {
                  "population": 175229
                }
              },
              {
                "name": "Mbala",
                "details": {
                  "population": 192905
                }
              },
              {
                "name": "Mporokoso",
                "details": {
                  "population": 167148
                }
              },
              {
                "name": "Luwingu",
                "details": {
                  "population": 152891
                }
              },
              {
                "name": "Mpulungu",
                "details": {
                  "population": 143500
                }
              },
              {
                "name": "Mungwi",
                "details": {
                  "population": 192465
                }
              },
              {
                "name": "Kaputa",
                "details": {
                  "population": 189903
                }
              },
              {
                "name": "Chilubi",
                "details": {
                  "population": 159919
                }
              },
              {
                "name": "Lunte",
                "details": {
                  "population": 206981
                }
              },
              {
                "name": "Lupososhi",
                "details": {
                  "population": 186926
                }
              },
              {
                "name": "Nsama",
                "details": {
                  "population": 188106
                }
              },
              {
                "name": "Senga Hill",
                "details": {
                  "population": 171448
                }
              }
            ],
            "details": {
              "population": 2127421
            }
          },
          {
            "name": "Luapula",
            "children": [
              {
                "name": "Mansa",
                "details": {
                  "population": 155003
                }
              },
              {
                "name": "Samfya",
                "details": {
                  "population": 207839
                }
              },
              {
                "name": "Kawambwa",
                "details": {
                  "population": 198861
                }
              },
              {
                "name": "Nchelenge",
                "details": {
                  "population": 182018
                }
              },
              {
                "name": "Mwense",
                "details": {
                  "population": 158812
                }
              },
              {
                "name": "Milenge",
                "details": {
                  "population": 218073
                }
              },
              {
                "name": "Chiengi",
                "details": {
                  "population": 186183
                }
              },
              {
                "name": "Chembe",
                "details": {
                  "population": 201704
                }
              },
              {
                "name": "Mwansabombwe",
                "details": {
                  "population": 201789
                }
              },
              {
                "name": "Lunga",
                "details": {
                  "population": 195115
                }
              },
              {
                "name": "Chifunabuli",
                "details": {
                  "population": 146448
                }
              }
            ],
            "details": {
              "population": 2051845
            }
          },
          {
            "name": "North-Western",
            "children": [
              {
                "name": "Solwezi",
                "details": {
                  "population": 169308
                }
              },
              {
                "name": "Mwinilunga",
                "details": {
                  "population": 147194
                }
              },
              {
                "name": "Kabompo",
                "details": {
                  "population": 166545
                }
              },
              {
                "name": "Zambezi",
                "details": {
                  "population": 179169
                }
              },
              {
                "name": "Kasempa",
                "details": {
                  "population": 141912
                }
              },
              {
                "name": "Mufumbwe",
                "details": {
                  "population": 170207
                }
              },
              {
                "name": "Chavuma",
                "details": {
                  "population": 148800
                }
              },
              {
                "name": "Ikelenge",
                "details": {
                  "population": 158868
                }
              },
              {
                "name": "Manyinga",
                "details": {
                  "population": 155936
                }
              },
              {
                "name": "Kalumbila",
                "details": {
                  "population": 143973
                }
              },
              {
                "name": "Mushindamo",
                "details": {
                  "population": 113597
                }
              }
            ],
            "details": {
              "population": 1695509
            }
          },
          {
            "name": "Western",
            "children": [
              {
                "name": "Mongu",
                "details": {
                  "population": 197816
                },
                "children": [
                  {
                    "name": "Mongu Central",
                    "details": {
                      "population": 80000
                    },
                    "children": [
                      {
                        "name": "Katongo",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 1",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Namasho",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 2",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Kaama",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 3",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Lumbo",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 4",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Lealui Lower",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 5",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Lealui Upper",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 6",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Mabumbu",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 7",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Kanyonyo",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 8",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Kambule",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 9",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Lewanika",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 10",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Imwiko",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 11",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Mulambwa",
                        "details": {
                          "population": 6666
                        },
                        "children": [
                          {
                            "name": "Village 12",
                            "details": {
                              "population": 6666
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Nalikwanda",
                    "details": {
                      "population": 57816
                    },
                    "children": [
                      {
                        "name": "Looma",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 1",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Nalwei",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 2",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Imalyo",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 3",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Namengo",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 4",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Lukalanya",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 5",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Mutondo",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 6",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Siyowe",
                        "details": {
                          "population": 8259
                        },
                        "children": [
                          {
                            "name": "Village 7",
                            "details": {
                              "population": 8259
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "name": "Mongu East",
                    "details": {
                      "population": 60000
                    },
                    "children": [
                      {
                        "name": "Yeta",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 1",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Namushakende",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 2",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Ilute",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 3",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Kaande",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 4",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Nakato",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 5",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Mbekise",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 6",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Litawa",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 7",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "name": "Nakanya",
                        "details": {
                          "population": 7500
                        },
                        "children": [
                          {
                            "name": "Village 8",
                            "details": {
                              "population": 7500
                            },
                            "children": [
                              {
                                "name": "Citizen",
                                "details": {
                                  "population": 1
                                }
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                "name": "Senanga",
                "details": {
                  "population": 119255
                }
              },
              {
                "name": "Kalabo",
                "details": {
                  "population": 128513
                }
              },
              {
                "name": "Kaoma",
                "details": {
                  "population": 123999
                }
              },
              {
                "name": "Sesheke",
                "details": {
                  "population": 114836
                }
              },
              {
                "name": "Lukulu",
                "details": {
                  "population": 99784
                }
              },
              {
                "name": "Shang'ombo",
                "details": {
                  "population": 140353
                }
              },
              {
                "name": "Luampa",
                "details": {
                  "population": 111137
                }
              },
              {
                "name": "Mitete",
                "details": {
                  "population": 130947
                }
              },
              {
                "name": "Mwandi",
                "details": {
                  "population": 106109
                }
              },
              {
                "name": "Nalolo",
                "details": {
                  "population": 120983
                }
              },
              {
                "name": "Nkeyema",
                "details": {
                  "population": 113734
                }
              },
              {
                "name": "Sikongo",
                "details": {
                  "population": 98764
                }
              },
              {
                "name": "Sioma",
                "details": {
                  "population": 121526
                }
              },
              {
                "name": "Mulobezi",
                "details": {
                  "population": 110737
                }
              },
              {
                "name": "Limulunga",
                "details": {
                  "population": 134988
                }
              }
            ],
            "details": {
              "population": 1886689
            }
          },
          {
            "name": "Muchinga",
            "children": [
              {
                "name": "Chinsali",
                "details": {
                  "population": 163047
                }
              },
              {
                "name": "Mpika",
                "details": {
                  "population": 205417
                }
              },
              {
                "name": "Isoka",
                "details": {
                  "population": 208970
                }
              },
              {
                "name": "Nakonde",
                "details": {
                  "population": 204208
                }
              },
              {
                "name": "Mafinga",
                "details": {
                  "population": 191111
                }
              },
              {
                "name": "Shiwang'andu",
                "details": {
                  "population": 160470
                }
              },
              {
                "name": "Lavushimanda",
                "details": {
                  "population": 181224
                }
              },
              {
                "name": "Kanchibiya",
                "details": {
                  "population": 116617
                }
              }
            ],
            "details": {
              "population": 1431064
            }
          }
        ],
        "details": {
          "population": 20500000,
          "language": "English",
          "leader": "President Hakainde Hichilema",
          "leaderSince": "2021-08-24",
          "previousLeader": "Previous Administration"
        }
      },
      {
        "name": "Zimbabwe (Republic of Zimbabwe) / President Emmerson Mnangagwa",
        "children": [
          {
            "name": "Bulawayo",
            "details": {
              "population": 1501451
            }
          },
          {
            "name": "Harare",
            "details": {
              "population": 1424477
            }
          },
          {
            "name": "Manicaland",
            "details": {
              "population": 1422219
            }
          },
          {
            "name": "Mashonaland Central",
            "details": {
              "population": 1616059
            }
          },
          {
            "name": "Mashonaland East",
            "details": {
              "population": 1959632
            }
          },
          {
            "name": "Mashonaland West",
            "details": {
              "population": 1774324
            }
          },
          {
            "name": "Masvingo",
            "details": {
              "population": 1678837
            }
          },
          {
            "name": "Matabeleland North",
            "details": {
              "population": 1520279
            }
          },
          {
            "name": "Matabeleland South",
            "details": {
              "population": 1477282
            }
          },
          {
            "name": "Midlands",
            "details": {
              "population": 2225440.000000002
            }
          }
        ],
        "details": {
          "population": 16600000.000000002,
          "language": "English, Shona, Ndebele",
          "leader": "President Emmerson Mnangagwa",
          "leaderSince": "2017-11-24",
          "previousLeader": "Robert Mugabe"
        }
      },
      {
        "name": "Western Sahara (Sahrawi Arab Democratic Republic) / President Brahim Ghali",
        "children": [
          {
            "name": "Boujdour",
            "details": {
              "population": 168466
            }
          },
          {
            "name": "Es Semara",
            "details": {
              "population": 124600
            }
          },
          {
            "name": "Laayoune",
            "details": {
              "population": 161895
            }
          },
          {
            "name": "Oued Ed-Dahab",
            "details": {
              "population": 145039
            }
          }
        ],
        "details": {
          "population": 600000,
          "language": "Arabic, Spanish",
          "leader": "President Brahim Ghali",
          "leaderSince": "2016-07-12",
          "previousLeader": "Mohamed Abdelaziz"
        }
      },
      {
        "name": "Burkina Faso / President Ibrahim Traoré",
        "children": [
          {
            "name": "Boucle du Mouhoun",
            "details": {
              "population": 1778143
            }
          },
          {
            "name": "Cascades",
            "details": {
              "population": 1502574
            }
          },
          {
            "name": "Centre",
            "details": {
              "population": 1776590
            }
          },
          {
            "name": "Centre-Est",
            "details": {
              "population": 1719183
            }
          },
          {
            "name": "Centre-Nord",
            "details": {
              "population": 1643729
            }
          },
          {
            "name": "Centre-Ouest",
            "details": {
              "population": 1519442
            }
          },
          {
            "name": "Centre-Sud",
            "details": {
              "population": 1528173
            }
          },
          {
            "name": "Est",
            "details": {
              "population": 2108397
            }
          },
          {
            "name": "Hauts-Bassins",
            "details": {
              "population": 1693388
            }
          },
          {
            "name": "Nord",
            "details": {
              "population": 1774396
            }
          },
          {
            "name": "Plateau-Central",
            "details": {
              "population": 2010293
            }
          },
          {
            "name": "Sahel",
            "details": {
              "population": 2119322
            }
          },
          {
            "name": "Sud-Ouest",
            "details": {
              "population": 2026370
            }
          }
        ],
        "details": {
          "population": 23200000,
          "language": "French",
          "leader": "President Ibrahim Traoré",
          "leaderSince": "2022-09-30",
          "previousLeader": "Paul-Henri Sandaogo Damiba"
        }
      },
      {
        "name": "Eswatini (Kingdom of Eswatini) / King Mswati III",
        "children": [
          {
            "name": "Hhohho",
            "details": {
              "population": 329236
            }
          },
          {
            "name": "Lubombo",
            "details": {
              "population": 283334
            }
          },
          {
            "name": "Manzini",
            "details": {
              "population": 261759
            }
          },
          {
            "name": "Shiselweni",
            "details": {
              "population": 325671
            }
          }
        ],
        "details": {
          "population": 1200000,
          "language": "Swazi, English",
          "leader": "King Mswati III",
          "leaderSince": "1986-04-25",
          "previousLeader": "Queen Dzeliwe"
        }
      },
      {
        "name": "Gabon (Gabonese Republic) / President Brice Clotaire Oligui Nguema",
        "children": [
          {
            "name": "Estuaire",
            "details": {
              "population": 317475
            }
          },
          {
            "name": "Haut-Ogooué",
            "details": {
              "population": 306825
            }
          },
          {
            "name": "Moyen-Ogooué",
            "details": {
              "population": 226736
            }
          },
          {
            "name": "Ngounié",
            "details": {
              "population": 315190
            }
          },
          {
            "name": "Nyanga",
            "details": {
              "population": 228123
            }
          },
          {
            "name": "Ogooué-Ivindo",
            "details": {
              "population": 257312
            }
          },
          {
            "name": "Ogooué-Lolo",
            "details": {
              "population": 249988
            }
          },
          {
            "name": "Ogooué-Maritime",
            "details": {
              "population": 235895
            }
          },
          {
            "name": "Woleu-Ntem",
            "details": {
              "population": 262456
            }
          }
        ],
        "details": {
          "population": 2400000,
          "language": "French",
          "leader": "President Brice Clotaire Oligui Nguema",
          "leaderSince": "2023-08-30",
          "previousLeader": "Ali Bongo Ondimba"
        }
      },
      {
        "name": "Guinea (Republic of Guinea) / President Mamady Doumbouya",
        "children": [
          {
            "name": "Boké",
            "details": {
              "population": 2089443
            }
          },
          {
            "name": "Conakry",
            "details": {
              "population": 1496803
            }
          },
          {
            "name": "Faranah",
            "details": {
              "population": 1806299
            }
          },
          {
            "name": "Kankan",
            "details": {
              "population": 1649790
            }
          },
          {
            "name": "Kindia",
            "details": {
              "population": 1688056
            }
          },
          {
            "name": "Labé",
            "details": {
              "population": 2102994
            }
          },
          {
            "name": "Mamou",
            "details": {
              "population": 2028765
            }
          },
          {
            "name": "Nzérékoré",
            "details": {
              "population": 1237850
            }
          }
        ],
        "details": {
          "population": 14100000,
          "language": "French",
          "leader": "President Mamady Doumbouya",
          "leaderSince": "2021-09-05",
          "previousLeader": "Alpha Condé"
        }
      },
      {
        "name": "Lesotho (Kingdom of Lesotho) / King Letsie III",
        "children": [
          {
            "name": "Berea",
            "details": {
              "population": 187741
            }
          },
          {
            "name": "Butha-Buthe",
            "details": {
              "population": 226394
            }
          },
          {
            "name": "Leribe",
            "details": {
              "population": 188813
            }
          },
          {
            "name": "Mafeteng",
            "details": {
              "population": 199340
            }
          },
          {
            "name": "Maseru",
            "details": {
              "population": 187355
            }
          },
          {
            "name": "Mohale's Hoek",
            "details": {
              "population": 272476
            }
          },
          {
            "name": "Mokhotlong",
            "details": {
              "population": 224804
            }
          },
          {
            "name": "Qacha's Nek",
            "details": {
              "population": 192649
            }
          },
          {
            "name": "Quthing",
            "details": {
              "population": 198602
            }
          },
          {
            "name": "Thaba-Tseka",
            "details": {
              "population": 421826
            }
          }
        ],
        "details": {
          "population": 2300000,
          "language": "Sesotho, English",
          "leader": "King Letsie III",
          "leaderSince": "1996-02-07",
          "previousLeader": "Moshoeshoe II"
        }
      },
      {
        "name": "Libya (State of Libya) / Chairman Mohamed al-Menfi",
        "children": [
          {
            "name": "Tripoli",
            "details": {
              "population": 844937
            }
          },
          {
            "name": "Benghazi",
            "details": {
              "population": 714360
            }
          },
          {
            "name": "Misrata",
            "details": {
              "population": 840966
            }
          },
          {
            "name": "Zawiya",
            "details": {
              "population": 938666
            }
          },
          {
            "name": "Sebha",
            "details": {
              "population": 898391
            }
          },
          {
            "name": "Al Wahat",
            "details": {
              "population": 720790
            }
          },
          {
            "name": "Ghat",
            "details": {
              "population": 890837
            }
          },
          {
            "name": "Derna",
            "details": {
              "population": 928145
            }
          },
          {
            "name": "Sirte",
            "details": {
              "population": 322908
            }
          }
        ],
        "details": {
          "population": 7100000,
          "language": "Arabic",
          "leader": "Chairman Mohamed al-Menfi",
          "leaderSince": "2021-03-15",
          "previousLeader": "Fayez al-Sarraj"
        }
      },
      {
        "name": "Mali (Republic of Mali) / President Assimi Goïta",
        "children": [
          {
            "name": "Bamako",
            "details": {
              "population": 2103505
            }
          },
          {
            "name": "Gao",
            "details": {
              "population": 2856763
            }
          },
          {
            "name": "Kayes",
            "details": {
              "population": 2100769
            }
          },
          {
            "name": "Kidal",
            "details": {
              "population": 2885551
            }
          },
          {
            "name": "Koulikoro",
            "details": {
              "population": 2792370
            }
          },
          {
            "name": "Mopti",
            "details": {
              "population": 2351727
            }
          },
          {
            "name": "Ségou",
            "details": {
              "population": 2608783
            }
          },
          {
            "name": "Sikasso",
            "details": {
              "population": 2732346
            }
          },
          {
            "name": "Tombouctou",
            "details": {
              "population": 2768186
            }
          }
        ],
        "details": {
          "population": 23200000,
          "language": "French",
          "leader": "President Assimi Goïta",
          "leaderSince": "2021-05-24",
          "previousLeader": "Bah Ndaw"
        }
      },
      {
        "name": "Morocco (Kingdom of Morocco) / King Mohammed VI",
        "children": [
          {
            "name": "Tanger-Tétouan-Al Hoceïma",
            "details": {
              "population": 2607361
            }
          },
          {
            "name": "l'Oriental",
            "details": {
              "population": 2925305
            }
          },
          {
            "name": "Fès-Meknès",
            "details": {
              "population": 2925930
            }
          },
          {
            "name": "Rabat-Salé-Kénitra",
            "details": {
              "population": 2623474
            }
          },
          {
            "name": "Béni Mellal-Khénifra",
            "details": {
              "population": 2703561
            }
          },
          {
            "name": "Casablanca-Settat",
            "details": {
              "population": 3237997
            }
          },
          {
            "name": "Marrakech-Safi",
            "details": {
              "population": 3281314
            }
          },
          {
            "name": "Drâa-Tafilalet",
            "details": {
              "population": 2545183
            }
          },
          {
            "name": "Souss-Massa",
            "details": {
              "population": 3319309
            }
          },
          {
            "name": "Guelmim-Oued Noun",
            "details": {
              "population": 3188688
            }
          },
          {
            "name": "Laâyoune-Sakia El Hamra",
            "details": {
              "population": 3038036
            }
          },
          {
            "name": "Dakhla-Oued Ed-Dahab",
            "details": {
              "population": 5403842
            }
          }
        ],
        "details": {
          "population": 37800000,
          "language": "Arabic, Tamazight",
          "leader": "King Mohammed VI",
          "leaderSince": "1999-07-23",
          "previousLeader": "King Hassan II"
        }
      },
      {
        "name": "Niger (Republic of the Niger) / President Abdourahamane Tchiani",
        "children": [
          {
            "name": "Agadez",
            "details": {
              "population": 3474665
            }
          },
          {
            "name": "Diffa",
            "details": {
              "population": 2756868
            }
          },
          {
            "name": "Dosso",
            "details": {
              "population": 4010460
            }
          },
          {
            "name": "Maradi",
            "details": {
              "population": 3146905
            }
          },
          {
            "name": "Niamey",
            "details": {
              "population": 4011314
            }
          },
          {
            "name": "Tahoua",
            "details": {
              "population": 3089036
            }
          },
          {
            "name": "Tillabéri",
            "details": {
              "population": 3752482
            }
          },
          {
            "name": "Zinder",
            "details": {
              "population": 2958270
            }
          }
        ],
        "details": {
          "population": 27200000,
          "language": "French",
          "leader": "President Abdourahamane Tchiani",
          "leaderSince": "2023-07-26",
          "previousLeader": "Mohamed Bazoum"
        }
      },
      {
        "name": "Sudan (Republic of the Sudan) / Chairman Abdel Fattah al-Burhan",
        "children": [
          {
            "name": "Khartoum",
            "details": {
              "population": 2642059
            }
          },
          {
            "name": "North Kordofan",
            "details": {
              "population": 3135248
            }
          },
          {
            "name": "Northern",
            "details": {
              "population": 2291376
            }
          },
          {
            "name": "Kassala",
            "details": {
              "population": 2735195
            }
          },
          {
            "name": "Blue Nile",
            "details": {
              "population": 2657633
            }
          },
          {
            "name": "North Darfur",
            "details": {
              "population": 2845672
            }
          },
          {
            "name": "South Darfur",
            "details": {
              "population": 2973512
            }
          },
          {
            "name": "South Kordofan",
            "details": {
              "population": 2784068
            }
          },
          {
            "name": "Gezira",
            "details": {
              "population": 3175105
            }
          },
          {
            "name": "White Nile",
            "details": {
              "population": 2897098
            }
          },
          {
            "name": "River Nile",
            "details": {
              "population": 2684452
            }
          },
          {
            "name": "Red Sea",
            "details": {
              "population": 2578509
            }
          },
          {
            "name": "Al Qadarif",
            "details": {
              "population": 2239824
            }
          },
          {
            "name": "Sennar",
            "details": {
              "population": 2343241
            }
          },
          {
            "name": "West Darfur",
            "details": {
              "population": 3073614
            }
          },
          {
            "name": "Central Darfur",
            "details": {
              "population": 2252447
            }
          },
          {
            "name": "East Darfur",
            "details": {
              "population": 3020612
            }
          },
          {
            "name": "West Kordofan",
            "details": {
              "population": 1770335
            }
          }
        ],
        "details": {
          "population": 48100000,
          "language": "Arabic, English",
          "leader": "Chairman Abdel Fattah al-Burhan",
          "leaderSince": "2019-04-12",
          "previousLeader": "Omar al-Bashir"
        }
      }
    ],
    "details": {
      "population": 1436000000
    }
  }
];
