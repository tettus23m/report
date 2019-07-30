select race.racename, people.peoplename from result \
                     inner join race on result.racename = race.id \
                     inner join people on result.people_id1 = people.id \
                     where year = 2019;
                     

select people.peoplename, count(people_id1) from result inner join people on result.people_id1 = people.id group by people_id1 order by count(people_id1) desc limit 10;

